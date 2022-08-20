
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext'
import Checkout from './components/Checkout/Checkout';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/App.scss'



function App() {

  return (
    <BrowserRouter>
      <CartContextProvider> 

        <div className="App">
          <NavBar />
            <Routes>
              <Route index path='/'element={<ItemListContainer/>}/>
              <Route path='/itemDetalle/:idDetalleProducto'element={<ItemDetailContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>   
              <Route path='/cart'element={<Cart/>}/>
              <Route path='/checkout/' element={<Checkout/>}/>
              <Route path='*'element={<Navigate to='/'/>}/> 
            </Routes>
          </div>

      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
