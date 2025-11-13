import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { LazyMotion, domAnimation } from "motion/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LazyMotion strict features={domAnimation}>
        <App />
      </LazyMotion>
    </Provider>
  </StrictMode>,
)
