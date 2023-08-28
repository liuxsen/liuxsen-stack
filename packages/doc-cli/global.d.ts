declare module '*.md'
declare module '*.mdx'

declare interface Window {
  hljs: {
    highlightAll: () => void
  } // 将能在全局使用 window.myGlobalVar
}
