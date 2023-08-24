import { markdown } from '../markdown'
import { genComponent } from './genComponent'

export const genVueSFC = (code: string, filePath: string) => {
  const content = markdown.render(code)
  const { template, importStr } = genComponent(content, filePath)
  return `<template><div>${template}</div></template>
          <script setup>
            ${importStr}
          </script>
        `
}
