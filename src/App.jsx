import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './sass/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
    <NavBar />
    <ItemListContainer contenedorItems={'Hola soy un contenedor de items'}/>
    </div>  
  )
}

export default App
