import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Button from './Button.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button />
    <Button type='danger' />
    <Button type='primary' />
  </React.StrictMode>,
)
