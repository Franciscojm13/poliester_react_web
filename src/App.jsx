import { useState } from 'react'
import './sass/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
    <NavBar />
    <ItemListContainer contenedorItems={'Hola soy un contenedor de items'}/>
    <ItemCount/>
    </div>  
  )
}

export default App
