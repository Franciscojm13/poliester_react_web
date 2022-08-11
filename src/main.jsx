import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConnections } from './firebase/config'
import './sass/App.scss'

firebaseConnections()

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />
)
