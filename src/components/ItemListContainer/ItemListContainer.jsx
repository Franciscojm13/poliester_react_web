import { useState, useEffect } from 'react'
import { getProductosCollage } from '../../getFetch'

import ItemList from './ItemList/ItemList'
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = () => {

    const [productosCollage, setProductosCollage]=useState([])
    const [cargandoPagina, setCargandoPagina]=useState(true)
    
    const agregarAlCarrito=(cantidadTotalProducto)=>{                  //función onAdd
        console.log(`Se hán agregado ${cantidadTotalProducto} productos al carrito`)
    }

    useEffect(()=>{
        getProductosCollage()   //async mock
        .then(resp=>{
            setProductosCollage(resp)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>setCargandoPagina(false))
    }, [])

    console.log(productosCollage)

    return (
        <div >

            { cargandoPagina ? <h2>Cargando los items ...</h2>
                :
                <div className="contenedor mx-3 mb-3 p-3">
                    <div className=" contenedor card-body mb-3 border ">
                        <div id="galeriaProductos" className="">
                            <div className="d-flex col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3 ">
                                <ItemList productos={productosCollage}/>  
                            </div> 
                        </div> 
                    </div>
                </div>
            } 
            
            <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer



