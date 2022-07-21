import Item from "../Item/Item"


const ItemList = ({productos}) => {
    return (
        <div>
            ItemList
            {productos.map(prod=> <Item key={prod.id} item={prod}/>)}

        </div>
    )
}

export default ItemList