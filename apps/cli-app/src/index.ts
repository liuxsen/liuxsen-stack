#!/usr/bin/env node
import path from 'node:path'
import process from 'node:process'
import yargs from 'yargs'
import { prompt } from './prompt'
import { checkMkdirExsits, copyFile } from './copy'

// const argv = yargs(hideBin(process.argv)).argv as ArgvType

// eslint-disable-next-line no-unused-expressions
yargs.command(
  ['create', 'c'], '新建一个模板',
  (yargs) => {
    return yargs.option('name', {
      alias: 'n',
      demandOption: '模板名称',
      type: 'string',
    })
  },
  (args) => {
    prompt(args.name)
      .then((res) => {
        const { name } = res
        const checkDir = path.resolve(process.cwd(), 'src', 'pages', name, 'index.tsx')
        const exists = checkMkdirExsits(checkDir)
        if (exists) {
          console.log(`${checkDir}文件已经存在`)
          return
        }
        copyFile(
          path.resolve(__dirname, '..', 'template', 'form', 'index.tsx'),
          path.resolve(process.cwd(), 'src', 'pages', name, 'index.tsx'),
        )
      })
  },
).argv
