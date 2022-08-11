
import { createContext, useState, useContext } from 'react'



const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


const CartContextProvider = ({children}) => {      //componente virtual de fachada

    //acá puedo declarar todos los estados y funciones globales, y ya no es necesario ponerlos en App.

    const [listaCart, setListaCart]=useState([]) 
    
    const agregarCarrito = (objetoACart)=>{
        const poscionItemRepetido=listaCart.findIndex(prod=> prod.id===objetoACart.id) // función que busca un repetido. Find devuelve la posición en donde está el repetido. Tira -1 si no lo encuentra
        if (poscionItemRepetido!=-1) {

            listaCart[poscionItemRepetido].cantidad += objetoACart.cantidad
            setListaCart([...listaCart])

        }else{
            setListaCart([...listaCart, objetoACart])
        }
    }

    const vaciarCarrito=()=>{
        console.log("Se ha vaciado el carrito")
        setListaCart([])
    }

    const precioTotal = ()=>{
        let acumuladorPrecio=0
        listaCart.forEach(prod=>{
            acumuladorPrecio+=parseInt(prod.precio)*prod.cantidad
        })
        return acumuladorPrecio
    }


    const getCantidadTotal = () => {
        let contador = 0
        listaCart.forEach(prod => {
            contador+= prod.cantidad
        })
        return contador
    }

    const quitarItem=(idProdQuitado)=>{
        setListaCart(listaCart.filter(prod=>prod.id!=idProdQuitado)) //filter retorna un nuevo array filtrado
    }

    const separadorDeMiles=(numero)=> {
        let partesNumero = numero.toString().split('.');
    
        partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        return partesNumero.join('.');
    }

    const descontarUnidad=(idProducto)=>{
        listaCart.forEach(prod=>{
            if(prod.id==idProducto){
                if(prod.cantidad==0){
                    return
                }else{
                    prod.cantidad -= 1
                    console.log(prod.cantidad)
                }
                
            }
        })
        setListaCart([...listaCart])
    }

    const aumentarUnidad=(idProducto)=>{
        listaCart.forEach(prod=>{
            if(prod.id==idProducto){
                if(prod.cantidad==prod.stock){
                    return
                }else{
                    prod.cantidad += 1
                    console.log(prod.cantidad)
                }
            }
        })
        setListaCart([...listaCart])
        
    }

    return (
        <div>
            <CartContext.Provider value={{listaCart, agregarCarrito, vaciarCarrito, precioTotal, getCantidadTotal, quitarItem, separadorDeMiles, descontarUnidad, aumentarUnidad}}>
                {children}
            </CartContext.Provider>
            
        </div>
    )
}

export default CartContextProvider