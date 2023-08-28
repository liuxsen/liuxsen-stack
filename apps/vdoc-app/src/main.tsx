import { createRoot } from 'react-dom/client'
import Demo from 'rvdoc/dist/ui/react/esm/Demo'

const root = createRoot(document.getElementById('app')!)

const App = () => {
  return <div>
    app
    <Demo/>
  </div>
}
root.render(<App/>)
