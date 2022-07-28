

const ItemDetail = ({detalleProducto}) => {
    return (
        <div className="contenedor mx-3 mb-3 p-3">
                <div className=" contenedor card-body mb-3 border ">
                    <div className="row">
                        <div className="col order-md-1 d-flex justify-content-center">
                            <img className="card-img " src={detalleProducto.foto} alt={`foto_producto_${detalleProducto.id}`} />
                        </div>
                        <div className="col order-md-2 mt-5">
                            <h3 className="card-title">{detalleProducto.nombre}</h3>
                            <p className="card-text lead">Detalle: Collage análogo 13x18 cm impreso en papel Fine Art.</p>
                            <p>Precio:{detalleProducto.precio} CLP</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail