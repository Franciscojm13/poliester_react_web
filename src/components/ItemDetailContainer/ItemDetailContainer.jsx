import { useState, useEffect } from 'react'
import { getProductosCollage } from '../../getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto]=useState({}) //inicializamos el estado con un objeto vacío

    const detalleId="c13"    //hardcode de id

    useEffect(() => {

        getProductosCollage(detalleId)
        .then(respuesta=>console.log(respuesta))
    }, [])
    

    return (
        <div>
            ItemDetailContainer
            <ItemDetail detalleProducto={detalleProducto} />

        </div>
    )
}

export default ItemDetailContainer