import inquirer from 'inquirer'

const mubanReg = /^[A-Z][a-zA-Z]{4,}/

type TMubanType = 'form' | 'dynamicForm' | 'nestedForm'
type TFrameType = 'react' | 'vue'

interface TStepOneAnswers {
  name: string
  type: TMubanType
  frame: TFrameType
  ui: 'antd' | 'element'
}

export const prompt = (mubanName: string): Promise<TStepOneAnswers> => {
  return new Promise((resolve) => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: '请输入模板名称',
        default: mubanName,
        validate(input) {
          if (!mubanReg.test(input)) {
            return '请输入不少于4个字符，首字母大写'
          }
          return true
        },
      },
      {
        type: 'list',
        name: 'type',
        message: '请输入模板类型',
        choices: ['表单', '动态表单', '嵌套表单'],
        filter(input: string) {
          return {
            表单: 'form',
            动态表单: 'dynamicForm',
            嵌套表单: 'nestedForm',
          }[input]
        },
      },
      {
        type: 'list',
        message: '使用什么框架开发',
        choices: ['react', 'vue'],
        name: 'frame',
      },
    ])
      .then((answers: TStepOneAnswers) => {
        console.log(answers)
        if (answers.frame === 'react') {
          inquirer.prompt([
            {
              type: 'list',
              message: '使用什么框架开发',
              choices: ['antd'],
              name: 'ui',
            },
          ]).then((res: { ui: 'antd' }) => {
            resolve({
              ...answers,
              ...res,
            })
          })
        }
        if (answers.frame === 'vue') {
          inquirer.prompt([
            {
              type: 'list',
              message: '使用什么框架开发',
              choices: ['element'],
              name: 'ui',
            },
          ]).then((res: { ui: 'element' }) => {
            resolve({
              ...answers,
              ...res,
            })
          })
        }
      })
  })
}
