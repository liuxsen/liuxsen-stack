import path from 'node:path'

import esbuild from 'esbuild'
import { replaceUtil } from '../utils'
import { demoReg2, getContentFromPath, markdownWarningReg } from '../common'
import { getImportName } from '../getNameFromPath'
import { markdown } from '../markdown'

export const genReactComponent = (sourceCode: string, id: string) => {
  const renderCode = markdown.render(sourceCode)
  const importList: string[] = []
  const newContent = replaceUtil(demoReg2, renderCode, ({ subStr, index }) => {
    const match = subStr.match(demoReg2)!
    const absPath = match[1]
    const fromPath = path.resolve('src', path.dirname(id), absPath)
    console.log(fromPath)
    const codeContent = getContentFromPath(fromPath)
    const importName = `${getImportName(fromPath)}${index}`
    const importStr = `import ${importName} from '${fromPath}'`
    importList.push(importStr)
    const demoImport = path.resolve('src', 'template', 'react', 'components', 'demo.tsx')
    importList.push(`import Demo from '${demoImport}'`)
    return `<div><Demo code="${codeContent}"><${importName}/></Demo></div>`
  })

  const warningText = replaceUtil(markdownWarningReg, newContent, ({ subStr }) => {
    // const [dots, warningType, content] = subStr.match(markdownWarningReg)
    const [_, __, type, content] = subStr.match(markdownWarningReg)!
    return `<p class="doc-cli-markdown-type doc-cli-markdown-${type}">
      ${content}</p>`
  })

  const template = `
    import React from 'react';
    ${importList.join('\n')}
    export default () => {
      return <div className="doc-cli">${warningText}</div>
    }
  `
  const { code } = esbuild.transformSync(template, {
    loader: 'tsx',
    target: 'esnext',
    treeShaking: true,
  })
  return code
}
