import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({contenedorItems}) => {
    
    const agregarAlCarrito=(cantidadTotalProducto)=>{                  //función onAdd
        console.log(`Se hán agregado ${cantidadTotalProducto} productos al carrito`)
    }

    return (
        <div className="card">
            
            {contenedorItems}

            <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer