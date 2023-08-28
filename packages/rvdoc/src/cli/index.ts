import inquirer from 'inquirer'
import { program } from 'commander'
import { viteDevServer } from './vite.dev'
import { viteBuildApp } from './vite.build'

type TFramework = 'react' | 'vue'
interface FrameWork {
  framework: TFramework
}

const bootstrap = () => {
  inquirer.prompt([
    { name: 'framework', message: '请选择使用框架', type: 'list', choices: ['react', 'vue'] },
  ])
    .then(((value: FrameWork) => {
      console.log(value.framework)
    }))
}

program.command('init')
  .option('-f, --framework <framework>', '请输入')
  .action((options: FrameWork) => {
    console.log(options)
    if (!options.framework) {
      bootstrap()
    }
  })

program.command('dev')
  .description('启动项目')
  .action(() => {
    console.log('dev')
    viteDevServer()
  })

program.command('build')
  .description('打包项目')
  .action(() => {
    viteBuildApp()
  })

program.parse()
