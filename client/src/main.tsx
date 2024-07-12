import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./App.js"

const root:HTMLElement | null = document.getElementById('root');
if(root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
else {
  console.log("Root element not found, did you forget to insert it in index.html?")
}