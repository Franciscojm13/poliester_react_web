import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductosCollage } from '../../getFetch'

import ItemList from './ItemList/ItemList'


const ItemListContainer = () => {

    const [productosCollage, setProductosCollage]=useState([])
    const [cargandoPagina, setCargandoPagina]=useState(true)

    const {idCategoria} = useParams()

    useEffect(()=>{
        if(idCategoria){
            getProductosCollage()   //async mock
            .then(resp=>{
                setProductosCollage(resp.filter(prod=>prod.categoria=== idCategoria))})
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>setCargandoPagina(false))
        }else{
            getProductosCollage()
            .then(resp=>{
                setProductosCollage(resp)})
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>setCargandoPagina(false))
        }
    }, [idCategoria])

    console.log(productosCollage)

    return (
        <div >

            { cargandoPagina ? <h2>Cargando los items ...</h2>
                :
                    <ItemList productos={productosCollage}/>  
            } 
            
            
        </div>
    )
}

export default ItemListContainer



