import process from 'node:process'

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
