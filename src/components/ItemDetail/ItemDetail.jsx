

const ItemDetail = ({detalleProducto}) => {
    return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img src={detalleProducto.foto} alt="foto_producto" />
                        </div>
                        <div className="col">
                            <h3>{detalleProducto.nombre}</h3>
                            <p>Detalle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum neque ab repellendus nobis, cupiditate  </p>
                            <p>Precio:{detalleProducto.precio}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* contador */}
                </div>
            </div>
    )
}

export default ItemDetail