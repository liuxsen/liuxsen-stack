import type { PluginOption } from 'vite'
import { markdown } from './markdown'
import { genComponent } from './genComponent'

const contentLoader = (code: string, filePath: string) => {
  const content = markdown.render(code)
  const { template, importStr } = genComponent(content, filePath)
  return `<template><div>${template}</div></template>
          <script setup>
            ${importStr}
          </script>
        `
}
const mdPlugin: () => PluginOption = () => {
  return {
    name: 'md-plugin',
    resolveId(id: string) {
    // 这里可以处理文件路径
      return id
    },
    transform(code, id) {
      if (id.endsWith('.md')) {
        console.log(id)
        return contentLoader(code, id)
      }
    },
    handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.md')) {
        const defaultRead = ctx.read
        ctx.read = async () => {
          const content = await defaultRead()
          return contentLoader(content, ctx.file)
        }
      }
    },
  }
}

export default mdPlugin
