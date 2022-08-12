import { useState } from 'react'


const ItemCount = ({stock, initial, onAddToCart}) => {

    const [contador, setContador]=useState(initial)   


    function funcionSumarProducto(){      //handleAdd
        if(contador>=stock){
            console.log(`No hay mas productos en stock, no puede agregar mas unidades al cariito.`)
            return;
        }
        setContador(contador+1)   
    }
    function funcionRestarProducto(){    //handleResta
        if(contador>1){
            setContador(contador-1)   
        }else{
            console.log('No puede seguir quitando unidades')
        }
    }

    //abatracción de la función onAddtoCart
    function handleAddToCart(){    
        if(contador<=stock){
            onAddToCart(contador)
        }
        
    }


    return (
        <>
            <div className='card d-inline-flex flex-column justify-content-center align-items-center mx-auto'>

                <div>Unidades del producto:</div>
                    <div className=' d-flex justify-content-center mx-auto mt-3'>
                            <button className='btn btn-primary' onClick={funcionRestarProducto}> - </button>   
                            <div>{contador}</div>
                            <button className='btn btn-primary' onClick={funcionSumarProducto}> + </button>
                    </div>
                            <button className='mt-3 btn btn-success' onClick={handleAddToCart}> Agregar al carrito </button>

            </div>
            
        </>
    )
}

export default ItemCount