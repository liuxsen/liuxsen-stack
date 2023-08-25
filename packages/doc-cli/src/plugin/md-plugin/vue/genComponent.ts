import path from 'node:path'
import { demoReg2, getContentFromPath, markdownWarningReg } from '../common'
import { replaceUtil } from '../utils'
import { getImportName } from '../getNameFromPath'

export const genComponent = (content: string, id: string) => {
  const importList: string[] = []
  const newContent = replaceUtil(demoReg2, content, ({ subStr, index }) => {
    const match = subStr.match(demoReg2)!
    const absPath = match[1]
    const fromPath = path.resolve('src', path.dirname(id), absPath)
    const importName = `${getImportName(fromPath)}${index}`
    const importStr = `import ${importName} from '${fromPath}'`
    const demoImport = path.resolve('src', 'template', 'vue', 'components', 'demo', 'index.vue')
    if (importList.length === 0) {
      importList.push(`import Demo from '${demoImport}'`)
    }
    importList.push(importStr)
    const codeContent = getContentFromPath(fromPath)
    return `<Demo code='${codeContent}'><${importName}/></Demo>`
  })
  const warningText = replaceUtil(markdownWarningReg, newContent, ({ subStr }) => {
    // const [dots, warningType, content] = subStr.match(markdownWarningReg)
    const [_, __, type, content] = subStr.match(markdownWarningReg)!
    return `<p class="doc-cli-markdown-type doc-cli-markdown-${type}">
      ${content}</p>`
  })
  return {
    template: warningText,
    importStr: importList.join('\n'),
  }
}
