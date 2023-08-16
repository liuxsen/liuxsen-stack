import fs from 'node:fs'
import path from 'node:path'
import copydir from 'copy-dir'

export const mkdirp = (dir: string) => {
  if (fs.existsSync(dir)) {
    return true
  }
  const dirname = path.dirname(dir)
  mkdirp(dirname)
  fs.mkdirSync(dir)
}

export const mkdirGuard = (target: string) => {
  try {
    fs.mkdirSync(target, { recursive: true })
  }
  catch (error) {
    mkdirp(target)
  }
}

export const copyDir = (from: string, to: string) => {
  mkdirGuard(to)
  copydir.sync(from, to)
}

/**
 * 校验是否存在文件夹
 * @param dir 路径
 * @returns 返回是否存在
 */
export const checkMkdirExsits = (dir: string) => {
  return fs.existsSync(dir)
}

export const copyFile = (from: string, to: string) => {
  const buffer = fs.readFileSync(from)
  const parentPath = path.dirname(to)
  mkdirGuard(parentPath)
  fs.writeFileSync(to, buffer)
}
