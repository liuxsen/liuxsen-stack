# stack

## commitizen

1. `pnpm add commitizen -g`
2. `pnpm cz-customizable -D -w`
3. 使用 `git cz` 辅助命令提交代码

## 安装stylelint

stylelint.vscode-stylelint

## 配置vscode自动修复

在 settings.json 中粘贴如下配置

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false,
    "source.fixAll.stylelint": true // 开启stylelint自动修复
  },
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "less", "postcss", "scss", "sass", "vue"]
}
```
