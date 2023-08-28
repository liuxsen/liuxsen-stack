import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app')!)

const App = () => {
  return <div>
    app
  </div>
}
root.render(<App/>)
