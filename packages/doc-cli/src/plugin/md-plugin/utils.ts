export const replaceUtil = (
  reg: RegExp,
  content: string,
  fn: (options: { subStr: string; index: number }) => string,
) => {
  let index = 0
  const getNewContent = () => {
    while (content.match(reg)) {
      index++
      content = content.replace(reg, (subStr: string) => {
        return fn({ subStr, index })
      })
      content = getNewContent()
    }
    return content
  }
  return getNewContent()
}
