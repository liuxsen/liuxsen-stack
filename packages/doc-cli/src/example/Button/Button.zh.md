# button

> aa

aaa
<demo src="./index.vue"></demo>
aa
<demo src="./index2.vue"></demo>
sss
<demo src="./index.vue"></demo>
sadf
<demo src="./index2.vue"></demo>
asdf
<demo src="./index.vue"></demo>


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
