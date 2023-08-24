import process from 'node:process'

export const demoReg = /<demo src="(.*)"><\/demo>/g
export const demoReg2 = /<demo src="(.*)"><\/demo>/
export const namePathReg = /^\.\/(.*)\.(js|jsx|vue|ts|tsx)/
export const ROOT = process.cwd()
