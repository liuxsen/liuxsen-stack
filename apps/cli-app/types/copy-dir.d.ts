declare module 'copy-dir' {
  namespace copyDir {
    interface Options {
      utimes: boolean,  // Boolean | Object, keep addTime or modifyTime if true
      mode: boolean,    // Boolean | Number, keep file mode if true
      cover: boolean,    // Boolean, cover if file exists
      filter: boolean,   // Boolean | Function, file filter
    }
    const sync: (from: string, to: string, options?: Options) => void
  }
  export = copyDir
}
