import { useState } from 'react'
import logo from './logo.svg'
import './sass/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)
  console.log("hola");

  return (
    
    <div className="App">
    <NavBar />
    </div>  
  )
}

export default App
