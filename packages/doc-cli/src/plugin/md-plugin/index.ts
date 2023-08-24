import type { PluginOption } from 'vite'
import { markdown } from './markdown'
import { genComponent } from './genComponent'

const mdPlugin: () => PluginOption = () => {
  return {
    name: 'md-plugin',
    resolveId(id: string) {
    // 这里可以处理文件路径
      return id
    },
    transform(code, id, options) {
      if (id.endsWith('.md')) {
        console.log(markdown.render(code))
        const content = markdown.render(code)
        const { template, importStr } = genComponent(content, id)
        // const { componentList, importStrList } = importStr(code, id)
        // return `<template>
        //   ${markdown.render(code)}
        //   ${componentList.join('\n')}
        // </template>
        // <script setup>
        //   ${importStrList.join('\n')}
        // </script>
        // `
        return `<template><div>${template}</div></template>
          <script setup>
            ${importStr}
          </script>
        `
      }
    },
  }
}

export default mdPlugin
