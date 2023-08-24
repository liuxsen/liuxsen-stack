import camelCase from 'camelcase'
import { ROOT, namePathReg } from './common'

/**
 * 匹配 ./index.jsx => index
 * @param pathStr 获得路径名字
 */
export const getNameFromPath = (pathStr: string) => {
  const res = [...pathStr.match(namePathReg)!]
  return res[1]
}

/**
 * 获取大驼峰明明
 * @param pathStr 路径
 * @returns import 大驼峰
 */
export const getImportName = (pathStr: string) => {
  const dotPath = pathStr.replace(ROOT, '').replace(/\//g, '-')
  return camelCase(dotPath, { pascalCase: true })
}
