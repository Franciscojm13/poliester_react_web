
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

    const {listaCart, vaciarCarrito, precioTotal, quitarItem} =  useCartContext()

    return (
        <div>
            Hola soy un carrito en construcción
            <div>
                
                {listaCart.map(item=>(
                    <div key={item.id}>
                        Nombre:{item.name} - Cantidad: {item.cantidad}
                        <button onClick={()=>quitarItem(item.id)}></button>
                    </div>
                ))}
                
            </div>
            <p>Precio Total: { precioTotal()!=0 && precioTotal() } CLP.</p>
            <button onClick={vaciarCarrito}>Vaciar el Carrito</button>
        </div>
    )
}

export default Cart