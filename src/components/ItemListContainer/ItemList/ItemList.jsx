import Item from "../Item/Item"


const ItemList = ({productos}) => {
    return (
        
            <div className="contenedor mx-3 mb-3 p-3">
                <div className=" contenedor card-body mb-3 border ">
                    <div id="galeriaProductos" className="d-flex col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3 ">
                                {productos.map(prod=> <Item key={prod.id} item={prod}/>)}  {/*Usamos las llaves por que es código js */}
                    </div> 
                </div> 
            </div>
    
    )
}

export default ItemList