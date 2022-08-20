import { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartContext'

const Checkout = () => {

    const {listaCart, vaciarCarrito, precioTotal, cantidadTotal, separadorDeMiles} =  useCartContext()

    const [idCompra, setIdCompra] = useState('')
    const [ordenCompra, setOrdenCompra] = useState({

        nombreComprador: '',
        emailComprador: '',
        confirmarEmailComprador: '',
        direccionComprador: '',
        telefonoComprador: ''
    })

    //funcion que va registrando cada cambio en los input 
    const cambiosFormulario = (e)=>{

        setOrdenCompra({
            ...ordenCompra,
            [e.target.name]: e.target.value
        })
    } 

    //mensaje que alerta sobre discordancia en los email ingresados
    const errorToastify=()=>{
        toast.error('Verifique que los correos coincidan! ', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    //función para guardar la orden en la base de datos 
    const finalizarCompra = async (event)=>{

        event.preventDefault()

        if(ordenCompra.emailComprador == ordenCompra.confirmarEmailComprador){
            //creamos nuestro objeto a enviar:
            const orden={}  
            orden.comprador= ordenCompra
            orden.items=listaCart.map(prod=>{
                return{
                    producto: prod.nombre,
                    id: prod.id,
                    precio: prod.precio,
                    cantidad: prod.cantidad
                }
            })
            orden.totalCompra=precioTotal()
            
            //insertamos la orden en la base de datos
            const baseDeDatos= getFirestore()
            const queryOrdenes=collection(baseDeDatos, 'ordenes')  
            addDoc(queryOrdenes, orden)      //añadimos nuevo objeto "orden" y creamos aumaticamente la colección "ordenes"
            .then(resp=>setIdCompra(resp.id))
            .finally(()=>{
                vaciarCarrito()
            })  
        }else{
            {errorToastify()}
        }
    }

    //Componente hijo que muestra la vista final de compra
    const VistaFinalCompra=()=>{
        
        return (
            <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                <img className=' card w-100'  src="/src/assets/photos/portada-medieval.jpg" alt="" />
                
                <div className='container card   position-absolute justify-content-center align-items-center'  >
                    <div className=' ' >
                        <h3 >Gracias por tu compra "{ordenCompra.nombreComprador}" !! Su numero de orden es: <b>"{idCompra}"</b></h3> 
                        <h3>Su paquete será enviado a "{ordenCompra.direccionComprador}".</h3>

                    </div>
                    
                </div>
                
            </div>
        )
    }


    return (
        <div className="contenedor mx-3 mb-3 p-3">
            <div className=" contenedor card-body mb-3 border ">
                {idCompra.length > 0 ?
                    <VistaFinalCompra/>
                    :
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 pt-2 px-5 ">

                            <form onSubmit={finalizarCompra}>
                                <h3 className="fw-bold mb-3 mt-2 pt-1">Datos del comprador:</h3>
                                <p>Por favor complete el siguiente formulario para finalizar su compra.</p>
                                <hr className="my-4"/>
                                <div className="mb-3">
                                    <label htmlFor="nombreComprador" className="form-label">Nombre y apellido:</label>
                                    <input type="text" required className="form-control" onChange={cambiosFormulario} value={ordenCompra.nombreComprador} name="nombreComprador" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailComprador" className="form-label">Correo electrónico:</label>
                                    <input type="email" required className="form-control" onChange={cambiosFormulario} value={ordenCompra.emailComprador} name="emailComprador" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">No compartiremos su correo con nadie mas.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmarEmailComprador" className="form-label">Confirme correo electrónico:</label>
                                    <input type="email" required className="form-control" onChange={cambiosFormulario} value={ordenCompra.confirmarEmailComprador} name="confirmarEmailComprador" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefonoComprador" className="form-label">Telefono:</label>
                                    <input type="number" required className="form-control" onChange={cambiosFormulario} value={ordenCompra.telefonoComprador} name="telefonoComprador"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccionComprador" className="form-label">Dirección</label>
                                    <input type="text" required className="form-control" onChange={cambiosFormulario} value={ordenCompra.direccionComprador} name="direccionComprador"/>
                                </div>
                                
                                <button type="submit" className="btn btn-dark btn-block btn-lg" idcompra={idCompra}  >Pagar</button>
                            </form>
                    
                        </div>

                        <div className="col-lg-5 bg-grey">

                            <div className="pt-2 px-5">
                                <h3 className="fw-bold mb-5 mt-2 pt-1">Detalle de compra:</h3>
                                <hr className="my-4"/>

                                {listaCart.map(item=>(
                                    
                                    <div key={item.id}> 

                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                            
                                            
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <img
                                                    src={`${item.foto}`}
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <h6 className="text-muted">{item.categoria}</h6>
                                                <h6 className="text-black mb-0">{`${item.nombre}`}</h6>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                
                                                <input id="form1" min="0" name="quantity" value={item.cantidad} readOnly type="number"
                                                    className="form-control form-control-sm" />
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 className="mb-0">{`$${separadorDeMiles(item.precio*item.cantidad)} CLP`}</h6>
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}

                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="text-uppercase">ITEMS: {cantidadTotal()}</h5>
                                </div>

                                <hr className="my-4"/>

                                
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="text-uppercase">PRECIO TOTAL:</h5>
                                    <h5>{ `$ ${separadorDeMiles(precioTotal())} CLP`} </h5>
                                </div>
                                

                            </div> 
                        </div>

                    </div>
                }
            </div>
            <ToastContainer/>
        </div>
        
    )
}

export default Checkout