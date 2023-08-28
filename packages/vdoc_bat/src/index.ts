import { Command } from 'commander'
import inquirer from 'inquirer'
import { viteDevServer } from './vite/vite.dev'
import type { FrameWork } from './vite/init'
import { initProject } from './vite/init'

const program = new Command()

const bootstrap = () => {
  // npx vdoc split --separator=/ a/b/c
  program
    .name('vdoc')
    .description('CLI for fe components of docs')
    .version('0.1.0')

  program.command('init')
    .option('-f, --framework <type>', '项目使用的框架,react｜vue')
    .action((str: { framework: FrameWork }, options) => {
      // 如果没有传入框架参数
      if (!str.framework) {
        console.log(str, options.d)
        inquirer.prompt([
          { name: 'framework', message: '请选择使用框架', type: 'list', choices: ['react', 'vue'] },
        ]).then((value: { framework: FrameWork }) => {
          initProject(value.framework)
        })
      }
      else {
        initProject(str.framework)
      }
    })

  program.command('build')
    .description('打包项目')
    .action(() => {
      console.log('build')
    })

  program.command('dev')
    .description('启动热更新服务')
    .action(() => {
      viteDevServer()
    })

  program.parse()
}

bootstrap()
