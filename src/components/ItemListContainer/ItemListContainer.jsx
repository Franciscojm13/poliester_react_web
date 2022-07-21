import { useState } from 'react'
import { useEffect } from 'react'
import { getProductosCollage } from '../../getFetch'

import ItemList from './ItemList/ItemList'
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({saludoContenedorItems}) => {

    const [productosCollage, setProductosCollage]=useState([])
    const [cargandoPagina, setCargandoPagina]=useState(true)
    
    const agregarAlCarrito=(cantidadTotalProducto)=>{                  //función onAdd
        console.log(`Se hán agregado ${cantidadTotalProducto} productos al carrito`)
    }

    useEffect(()=>{
        getProductosCollage()   //mock
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
        <div className="card">
            
            {saludoContenedorItems}

            { cargandoPagina ? <h1>Cargando los items ...</h1>
                :
                <ItemList productos={productosCollage}/>
                
            } 
            
            <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer