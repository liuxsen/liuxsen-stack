import { createRoot } from 'react-dom/client'
import './styles/theme.less'
import MdText from '../example/Button/Button.zh.mdx'
import DefaultLayout from './react/layout/default'

const root = createRoot(document.getElementById('app')!)
console.log(MdText)
const App = () => {
  return <div>
    <DefaultLayout>
      <MdText/>
    </DefaultLayout>
  </div>
}
console.log(App)
root.render(<App/>)
