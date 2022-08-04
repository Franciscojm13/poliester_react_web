
import { createContext, useState, useContext } from 'react'



const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


const CartContextProvider = ({children}) => {      //componente virtual de fachada

    //acá puedo declarar todos los estados y funciones globales, y ya no es necesario ponerlos en App.

    const [listaCart, setListaCart]=useState([]) 
    
    const agregarCarrito = (objetoACart)=>{
        setListaCart([...listaCart, objetoACart])
    }

    const vaciarCarrito=()=>{
        console.log("Se ha vaciado el carrito")
        setListaCart([])
    }

    const isInCart = (idRepetido)=>{
        return ( 
            listaCart.some(prod=>prod.id===idRepetido)
        )
    }

    // const getCantidad = () => {
    //     let contador = 0
    //     cart.forEach(prod => {
    //         contador = contador+= prod.cantidad
    //     })

    //     return contador
    // }

    return (
        <div>
            <CartContext.Provider value={{listaCart, agregarCarrito, vaciarCarrito, isInCart}}>
                {children}
            </CartContext.Provider>
            
        </div>
    )
}

export default CartContextProvider
