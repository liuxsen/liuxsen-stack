import { createRoot } from 'react-dom/client'
import './styles/var.less'
import MdText from '../example/Button/Button.zh.mdx'

const root = createRoot(document.getElementById('app')!)
console.log(MdText)
const App = () => {
  return <div>
    <div>app</div>
    <MdText/>
  </div>
}
console.log(App)
root.render(<App/>)
