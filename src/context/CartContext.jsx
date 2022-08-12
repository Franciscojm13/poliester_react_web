
import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])  //creamos nuestro contexto

export const useCartContext = ()=> useContext(CartContext)


const CartContextProvider = ({children}) => {      //componente virtual de fachada

    const [listaCart, setListaCart]=useState([]) 
    
    // funcion agregar productos y verifica si ya existen en el carro 
    const agregarCarrito = (objetoACart)=>{
        const poscionItemRepetido=listaCart.findIndex(prod=> prod.id===objetoACart.id) //findIndex devuelve la posición en donde está el repetido. Tira -1 si no lo encuentra
        if (poscionItemRepetido!=-1) {

            listaCart[poscionItemRepetido].cantidad += objetoACart.cantidad
            setListaCart([...listaCart])

        }else{
            setListaCart([...listaCart, objetoACart])
        }
    }

    //funcion evento vaciar todo el carro
    const vaciarCarrito=()=>{
        console.log("Se ha vaciado el carrito")
        setListaCart([])
    }

    //funcion calculadora de precio total del carro
    const precioTotal = ()=>{
        let acumuladorPrecio=0
        listaCart.forEach(prod=>{
            acumuladorPrecio+=parseInt(prod.precio)*prod.cantidad
        })
        return acumuladorPrecio
    }

    //funcion sumatoria de items en el carro
    const cantidadTotal = () => {
        let contador = 0
        listaCart.forEach(prod => {
            contador+= prod.cantidad
        })
        return contador
    }

    //funcion que elimina un producto del carro junto a todas sus unidades
    const quitarItem=(idProdQuitado)=>{
        setListaCart(listaCart.filter(prod=>prod.id!=idProdQuitado)) //filter retorna un nuevo array filtrado
    }

    //funcion que añade separadores de miles en los numeros
    const separadorDeMiles=(numero)=> {
        let partesNumero = numero.toString().split('.');
    
        partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        return partesNumero.join('.');
    }

    //funcion que descuenta una unidad de un producto ya agregado al carro
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

    //funcion que aumenta una unidad de un producto ya agregado en el carro
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
            <CartContext.Provider value={{listaCart, agregarCarrito, vaciarCarrito, precioTotal, cantidadTotal, quitarItem, separadorDeMiles, descontarUnidad, aumentarUnidad}}>
                {children}
            </CartContext.Provider>
            
        </div>
    )
}

export default CartContextProvider
