import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'


import ItemList from './ItemList/ItemList'


const ItemListContainer = () => {

    const [productosCollage, setProductosCollage]=useState([])
    const [cargandoPagina, setCargandoPagina]=useState(true)

    const {idCategoria} = useParams()

    //consumiendo items desde firebase
    useEffect(()=>{
        //filtrando productos por categoria
        if(idCategoria){
            const baseDeDatos=getFirestore()
            const traerProductos = collection(baseDeDatos, 'items')
            const productosFiltrados= query(traerProductos, where('categoria', '==', idCategoria))
            getDocs(productosFiltrados)
            .then(resp=> setProductosCollage( 
                resp.docs
                    .map(prod=>({id: prod.id, ...prod.data()}))
                    .sort((a,b)=> (a.nombre > b.nombre ? 1 : -1)) 
                    ))
            .catch(err=> console.log(err))
            .finally(()=> setCargandoPagina(false))
        //trayendo todo el array de productos
        }else{
            const db=getFirestore()
            const queryCollection = collection(db, 'items')   
            getDocs(queryCollection)
            .then(resp=> setProductosCollage( resp.docs.map(prod=>({id: prod.id, ...prod.data()})) ))
            .catch(err=> console.log(err))
            .finally(()=>setCargandoPagina(false))
        }
    }, [idCategoria])

    console.log(productosCollage)

    //abstracción del Loading en un componente
    const CargandoPagina=()=>{         
        useEffect(()=>{
            return ()=> console.log("componente CargandoPagina desmontado")
        })

        return (
            <h2>Cargando los Items...</h2>
        )
    }

    return (
        <div >

            { cargandoPagina ?
                <CargandoPagina/>
                :
                <ItemList productos={productosCollage}/>  
            } 
        </div>
    )
}

export default ItemListContainer



