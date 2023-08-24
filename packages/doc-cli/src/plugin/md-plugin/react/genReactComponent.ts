import path from 'node:path'
import esbuild from 'esbuild'
import { replaceUtil } from '../utils'
import { demoReg2 } from '../common'
import { getImportName } from '../getNameFromPath'
import { markdown } from '../markdown'

export const genReactComponent = (sourceCode: string, id: string) => {
  const renderCode = markdown.render(sourceCode)
  const importList = []
  const newContent = replaceUtil(demoReg2, renderCode, ({ subStr, index }) => {
    const match = subStr.match(demoReg2)
    const absPath = match[1]
    const fromPath = path.resolve('src', path.dirname(id), absPath)
    const importName = `${getImportName(fromPath)}${index}`
    const importStr = `import ${importName} from '${fromPath}'`
    importList.push(importStr)
    return `<div><${importName}/></div>`
  })
  const template = `
    import React from 'react';
    ${importList.join('\n')}
    export default () => {
      return <div>${newContent}</div>
    }
  `
  const { code } = esbuild.transformSync(template, {
    loader: 'tsx',
    target: 'esnext',
    treeShaking: true,
  })
  return code
}