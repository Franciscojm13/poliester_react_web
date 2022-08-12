import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto]=useState({}) //inicializamos el estado con un objeto vacío
    const {idDetalleProducto}=useParams()                     //debe ser el mismo nombre que pusimos en la ruta del Route


    console.log(idDetalleProducto)

    useEffect(()=>{
        const baseDeDatos =getFirestore()
        const traerProducto = doc(baseDeDatos, 'items', idDetalleProducto) 
        getDoc(traerProducto)
        .then(resp=> setDetalleProducto({id: resp.id, ...resp.data()}))

    }, [])
    console.log(detalleProducto)
    

    return (
        <div>
            
            <ItemDetail detalleProducto={detalleProducto} />

        </div>
    ) 
}

export default ItemDetailContainer