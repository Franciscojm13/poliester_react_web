
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

    const {listaCart, vaciarCarrito} =  useCartContext()

    return (
        <div>
            Hola soy un carrito en construcción
            <ul>
                {listaCart.map(item=>{
                    <li key={item.id}>
                        {item.name} - {item.cantidad}
                    </li>
                })}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar el Carrito</button>
        </div>
    )
}

export default Cart