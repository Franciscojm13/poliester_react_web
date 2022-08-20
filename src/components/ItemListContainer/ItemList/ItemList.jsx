import Item from "../Item/Item"


const ItemList = ({productos}) => {
    return (
        
            <div className="contenedor mx-3 mb-3 p-3">
                <div className=" contenedor card-body mb-3 border">
                    <div id="galeriaProductos" className="d-flex g-2">
                                {productos.map(prod=> <Item key={prod.id} item={prod}/>)} 
                    </div> 
                </div> 
            </div>
    
    )
}

export default ItemList