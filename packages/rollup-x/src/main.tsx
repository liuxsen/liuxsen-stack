import { createRoot } from 'react-dom/client'
import App from './App'

export const count = 1

const root = createRoot(document.getElementById('app')!)

root.render(<App/>)
