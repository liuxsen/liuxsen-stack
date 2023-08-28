import path from 'path'
import fs from 'fs-extra'
import { ROOT } from '../utils/constants'

// 初始化项目
export type FrameWork = 'react' | 'vue'

const copyHtml = (framework: FrameWork) => {
  const src = path.join(__dirname, '..', 'template', `${framework}`, 'index.html')
  const dest = path.join(ROOT, 'index.html')
  fs.copyFileSync(src, dest)
}

const copySource = (framework: FrameWork) => {
  const src = path.join(__dirname, '..', 'template', `${framework}`, 'src')
  const dest = path.join(ROOT, 'src')
  return fs.copy(src, dest)
}

const copyConfig = () => {
  const src = path.join(__dirname, '..', 'template', 'config')
  const dest = path.join(ROOT)
  return fs.copy(src, dest)
}

export const initProject = async (framework: FrameWork) => {
  console.log(framework)
  copyHtml(framework)
  await copySource(framework)
  await copyConfig()
  console.log('项目初始化成功')
}
