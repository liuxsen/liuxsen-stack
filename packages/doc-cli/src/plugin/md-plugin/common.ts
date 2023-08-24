import process from 'node:process'
import fs from 'fs-extra'

export const demoReg = /<demo src="(.*)"><\/demo>/g
export const demoReg2 = /<demo src="(.*)"><\/demo>/
/**
  匹配
    :::warning
    这是一段warning
 */
export const markdownWarningReg = /<p>(:::)(warning|tips|success|error)\n(.*)(<\/p>)/
export const namePathReg = /^\.\/(.*)\.(js|jsx|vue|ts|tsx)/
export const ROOT = process.cwd()

/**
 * 获取路径的源码
 * @param contentPath 组件源码路径
 * @returns 返回源码
 */
export const getContentFromPath = (contentPath: string) => {
  const content = fs.readFileSync(contentPath, 'utf-8')
  return content
}
