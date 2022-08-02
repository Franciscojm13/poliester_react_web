import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductosCollage } from '../../getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto]=useState({}) //inicializamos el estado con un objeto vacío
    const {idDetalleProducto}=useParams()                     //debe ser el mismo nombre que pusimos en la ruta del Route
    
    console.log(idDetalleProducto)

    useEffect(() => {    //busca y trae el producto seleccionado

        getProductosCollage(idDetalleProducto)   //getFetch
        .then(respuesta=>setDetalleProducto(respuesta))
    }, [])
    

    return (
        <div>
            
            <ItemDetail detalleProducto={detalleProducto} />

        </div>
    ) 
}

export default ItemDetailContainer