import Item from "../Item/Item"


const ItemList = ({productos}) => {
    return (
        <div>
            

             {productos.map(prod=> <Item key={prod.id} item={prod}/>)}  {/*Usamos las llaves por que es código js */}

        </div>
    )
}

export default ItemList