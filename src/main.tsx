import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfiguratorProvider } from "./ctx/Configurator";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfiguratorProvider>
    <App /></ConfiguratorProvider>
  </React.StrictMode>
)
