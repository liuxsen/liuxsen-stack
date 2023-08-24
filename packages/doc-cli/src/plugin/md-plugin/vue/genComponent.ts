import path from 'node:path'
import { demoReg2, markdownWarningReg } from '../common'
import { replaceUtil } from '../utils'
import { getImportName } from '../getNameFromPath'

export const genComponent = (content: string, id: string) => {
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
  const warningText = replaceUtil(markdownWarningReg, newContent, ({ subStr, index }) => {
    // const [dots, warningType, content] = subStr.match(markdownWarningReg)
    const [_, dots, type, content] = subStr.match(markdownWarningReg)
    return `<p class="doc-cli-markdown-type doc-cli-markdown-${type}">
      ${content}</p>`
  })
  return {
    template: warningText,
    importStr: importList.join('\n'),
  }
}
