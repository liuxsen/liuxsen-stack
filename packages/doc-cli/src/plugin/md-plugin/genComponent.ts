import path from 'node:path'
import { demoReg2 } from './common'
import { replaceUtil } from './utils'
import { getImportName } from './getNameFromPath'

export const genComponent = (content: string, id: string) => {
  console.log(content)
  const importList = []
  const newContent = replaceUtil(demoReg2, content, ({ subStr, index }) => {
    const match = subStr.match(demoReg2)
    const absPath = match[1]
    const fromPath = path.resolve('src', path.dirname(id), absPath)
    const importName = `${getImportName(fromPath)}${index}`
    const importStr = `import ${importName} from '${fromPath}'`
    importList.push(importStr)
    return `<div><${importName}/></div>`
  })
  console.log(newContent)
  return {
    template: newContent,
    importStr: importList.join('\n'),
  }
}
