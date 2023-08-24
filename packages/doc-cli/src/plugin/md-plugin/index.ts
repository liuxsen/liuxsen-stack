import type { PluginOption } from 'vite'
import { genVueSFC } from './vue/genVueSFC'
import { genReactComponent } from './react/genReactComponent'

export interface MdPluginOption {
  // 使用的技术栈
  frameWork: 'vue' | 'react'
}

const mdPlugin: (options?: MdPluginOption) => PluginOption = () => {
  return {
    name: 'md-plugin',
    resolveId(id: string) {
    // 这里可以处理文件路径
      return id
    },
    transform(code, id) {
      if (id.endsWith('.md')) {
        return genVueSFC(code, id)
      }
      if (id.endsWith('.mdx')) {
        return genReactComponent(code, id)
      }
    },
    handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.md')) {
        const defaultRead = ctx.read
        ctx.read = async () => {
          const content = await defaultRead()
          return genVueSFC(content, ctx.file)
        }
      }
      if (ctx.file.endsWith('.mdx')) {
        const defaultRead = ctx.read
        ctx.read = async () => {
          const content = await defaultRead()
          return genReactComponent(content, ctx.file)
        }
      }
    },
  }
}

export default mdPlugin
