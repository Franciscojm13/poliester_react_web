import {useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"





const ItemDetail = ({detalleProducto}) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(true)  //estado que almacena la cantidad agregada al carrito


    const agregarAlCarrito=(cantidadTotalProducto)=>{                  //función onAdd
        console.log(`Se hán agregado ${cantidadTotalProducto} productos al carrito`)
        setCantidadAgregada(false)           //actualizamos el estado para que se haga el re-rendering condicional
    }
    
    return (
        <div className="contenedor mx-3 mb-3 p-3">
                <div className=" contenedor card-body mb-3 border ">
                    <div className="row">
                        <div className="col order-md-1 d-flex justify-content-center">
                            <img className="card-img " src={detalleProducto.foto} alt={`foto_producto_${detalleProducto.id}`} />
                        </div>
                        <div className="col order-md-2 mt-5">
                            <h3 className="card-title">{detalleProducto.nombre}</h3>
                            <p className="card-text lead">Detalle: Collage análogo 13x18 cm impreso en papel Fine Art.</p>
                            <p>Precio:{detalleProducto.precio} CLP</p>

                            {cantidadAgregada ?                            //preguntamos si cantidadAgregada es true, es decir si es que existe
                                <ItemCount stock={10} initial={1} onAddToCart={agregarAlCarrito} />
                                :
                                <Link to={'/cart'} ><button className='mt-3 btn btn-success'>Ver el Carrito</button>  </Link>  //cuando el estado sea false, se mostrará este botón linkeado cl cart.
                            }

                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail