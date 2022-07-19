import { useState } from 'react'
import React from 'react'

const ItemCount = () => {

    const [contador, setContador]=useState(0)

    function funcionSumarProducto(){
        setContador(contador+1)   
    }
    function funcionRestarProducto(){
        if(contador>0){
        setContador(contador-1)   
        }
    }

    function agregarAlCarrito(){
        console.log(`Se hán agregado ${contador} productos al carrito`)
    }

    return (
        <>
            <div className='container d-inline-flex flex-column justify-content-center align-items-center mx-auto'>

                <div>Unidades del producto:</div>
                    <div className=' d-flex justify-content-center mx-auto mt-3'>
                            <button onClick={funcionRestarProducto}> - </button>    
                            <div>{contador}</div>
                            <button onClick={funcionSumarProducto}> + </button>
                    </div>
                    <button className='mt-3' onClick={agregarAlCarrito}> Agregar al carrito </button>
                    
            </div>
            
        </>
    )
}

export default ItemCount