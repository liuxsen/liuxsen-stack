// 同步模板
import path from 'path'
import process from 'process'
import fs from 'fs-extra'

const ROOT = process.cwd()

const copyTemplate = () => {
  const templateSrc = path.join(__dirname, '..', 'src', 'template')
  const targetDest = path.resolve(ROOT, 'dist', 'template')
  fs.copySync(templateSrc, targetDest)
}

copyTemplate()
