
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/App.scss'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
          <Route index path='/'element={<ItemListContainer/>}/>
          <Route path='/itemDetalle/:idDetalleProducto'element={<ItemDetailContainer/>}/>   
          <Route path='/cart'element={<Cart/>}/>
          <Route path='*'element={<Navigate to='/'/>}/> 
        </Routes>
        
      </div>  
    </BrowserRouter>
  )
}

export default App
