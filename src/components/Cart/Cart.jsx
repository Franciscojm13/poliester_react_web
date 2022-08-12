
import { Link, useParams } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"

const Cart = () => {

    const [idCompra, setIdCompra] = useState('')

    const {listaCart, vaciarCarrito, precioTotal, quitarItem, cantidadTotal, separadorDeMiles, descontarUnidad, aumentarUnidad} =  useCartContext()



    //función para guardar la orden en la base de datos

    const finalizarCompra = async (event)=>{

        event.preventDefault()
        //creamos nuestro objeto a enviar:
        const orden={}  
        orden.comprador={nombre: "Francisco Mora", email: "f@gmail.com", direccion: "sim gonz 8729"}
        orden.items=listaCart.map(prod=>{
            return{
                producto: prod.nombre,
                id: prod.id,
                precio: prod.precio
            }
        })
        orden.totalCompra=precioTotal()
        

        //insertamos la orden en la base de datos
        const baseDeDatos= getFirestore()
        const queryOrdenes=collection(baseDeDatos, 'ordenes')  
        addDoc(queryOrdenes, orden)      //añadimos nuevo objeto "orden" y creamos aumaticamente la colección "ordenes"
        .then(resp=>setIdCompra(resp.id))
        .finally(()=>vaciarCarrito())  
        console.log(orden)
        console.log(idCompra)

            
        
}

    return (
        <div className="h-100 " >

            
            <div className="contenedor mx-3 mb-3 p-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="contenedor card-body mb-3 border" >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h2 className="fw-bold mb-0 text-black">Carrito de Compras</h2>
                                                <h6 className="mb-0 text-muted">Items: {cantidadTotal()}</h6>
                                            </div>
                                            <hr className="my-4"/>

                                            {idCompra.length > 0 ?
                                                <h6>Gracias por su compra! Su numero de orden es: <b>"{idCompra}"</b></h6> 
                                                :
                                                
                                            
                                                (listaCart.length==0  ?                         //condicional que pregunta si hay elementos en el array
                                                    <h3> No tiene productos agregados al carrito.</h3>
                                                :
                                                    listaCart.map(item=>(
                                                        <div key={item.id}> 

                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                
                                                                
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img
                                                                        src={`${item.foto}`}
                                                                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                                    <h6 className="text-muted">{item.categoria}</h6>
                                                                    <h6 className="text-black mb-0">{`${item.nombre}`}</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <button className="simboloBtn btn btn-link text-muted "
                                                                        onClick={ ()=> descontarUnidad(item.id) }>-</button>

                                                                    <input id="form1" min="0" name="quantity" value={item.cantidad} readOnly type="number"
                                                                        className="form-control form-control-sm" />

                                                                    <button className="simboloBtn btn btn-link text-muted " 
                                                                        onClick={ ()=> aumentarUnidad(item.id) }>+</button>
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0">{`$${separadorDeMiles(item.precio*item.cantidad)} CLP`}</h6>
                                                                </div>
                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <button className="btn text-muted" onClick={ ()=> quitarItem(item.id) }>X</button>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                )
                                            }

                                            <hr className="my-4"/>

                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-3 pt-5">
                                                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                                                    <h6 className="mb-0">
                                                        <i className="fas fa-long-arrow-alt-left me-2" >Seguir comprando </i></h6>
                                                    </Link>
                                                </div>
                                                {listaCart.length!=0 &&
                                                    <dir className="col-lg-3 pt-5">
                                                        <button type="button" className="btn btn-dark btn-block btn-sm" onClick={vaciarCarrito} data-mdb-ripple-color="dark"> Vaciar Carrito </button>
                                                    </dir>
                                                }
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen de compra</h3>
                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">ITEMS: {cantidadTotal()}</h5>
                                                <h5>$ {separadorDeMiles(precioTotal())} CLP</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">ENVÍO</h5>

                                            {/* Select con propósitos demostrativos. No surte efecto en el precio final */}
                                            <div className="mb-4 pb-2">
                                                <select className="select">                                            
                                                    <option value="1">Envío Standar en R.M. - $2,500 CLP</option>
                                                    <option value="2">Envío Standar fuera de R.M. - $5,000 CLP</option>
                                                    <option value="3">Envío Internacional - $10,000 CLP</option>
                                                    <option value="4">Retiro en Tienda - $0 CLP</option>
                                                </select>
                                            </div>


                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">PRECIO TOTAL:</h5>
                                                <h5>{ `$ ${separadorDeMiles(precioTotal())} CLP`} </h5>
                                            </div>

                                            {listaCart.length!=0 &&
                                                <Link to={'/checkout'} idcompra={idCompra}  style={{ textDecoration: 'none' }}>
                                                    <button type="button" className="btn btn-dark btn-block btn-lg"
                                                        data-mdb-ripple-color="dark" 
                                                        onClick={finalizarCompra}> Ir a Pagar
                                                    </button>
                                                </Link>
                                            }

                                            
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart