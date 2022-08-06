import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { getProductosCollage } from '../../getFetch'

import ItemList from './ItemList/ItemList'


const ItemListContainer = () => {

    const [productosCollage, setProductosCollage]=useState([])
    const [cargandoPagina, setCargandoPagina]=useState(true)

    const {idCategoria} = useParams()


    //traer un producto por id -> ItemDetailContainer

    // useEffect(()=>{
    //     const db =getFirestore()
    //     const queryProducto = doc(db, 'items', '2XYK6eRfjMkHA11ZTvY0')
    //     getDoc(queryProducto)
    //     .then(resp=> setProductosCollage({id: resp.id, ...resp.data()}))

    // }, [])
    // console.log(productosCollage)

    //traer todos los productos a un aray

    // useEffect(()=>{
    //     const db=getFirestore()
    //     const queryCollection = collection(db, 'items')
    //     getDocs(queryCollection)
    //     .then(resp=> setProductosCollage( resp.docs.map(prod=>({id: prod.id, ...prod.data()})) ))
    //     .catch(err=> console.log(err))
    //     .finally(()=> setCargandoPagina(false))
    // },[])
    //     console.log(productosCollage)

    //traer todos los productos pero filtrados:
        // useEffect(()=>{
        //     const db=getFirestore()
        //     const queryCollection = collection(db, 'items')
        //     const queryFiltrada= query(queryCollection, where('precio', '>', '10000'))
        //     getDocs(queryFiltrada)
        //     .then(resp=> setProductosCollage( resp.docs.map(prod=>({id: prod.id, ...prod.data()})) ))
        //     .catch(err=> console.log(err))
        //     .finally(()=> setCargandoPagina(false))
        // },[])
        //     console.log(productosCollage)

        //filtrando por categoria:  
        // useEffect(()=>{
        //     const db=getFirestore()
        //     const queryCollection = collection(db, 'items')
        //     const queryFiltrada= query(queryCollection, where('categoria', '==', 'collageTipo_1'))
        //     getDocs(queryFiltrada)
        //     .then(resp=> setProductosCollage( resp.docs.map(prod=>({id: prod.id, ...prod.data()})) ))
        //     .catch(err=> console.log(err))
        //     .finally(()=> setCargandoPagina(false))
        // },[])
        //     console.log(productosCollage)


    //forma antigua usando un mock:
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

    const CargandoPagina=()=>{         //abstracción del Loading en un componente
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



