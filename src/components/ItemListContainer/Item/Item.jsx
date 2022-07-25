

const Item = ({item}) => {
    return (
        <div className="contenedor mx-3 mb-3 p-3">
            <div className=" contenedor card-body mb-3 border ">
                <div id="galeriaProductos" className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3 d-flex">
                        <div className="item__galeriaCollage ">
                            <div><a href="#" id={"vistaPreviaImg_"+item.id}><img src={item.foto} alt={"microbloqueo_"+item.id}/></a></div>
                            <h5 className="text-center my-2">{item.nombre}</h5>
                            <p className="text-center mb-2"><strong> {item.precio+" CLP"}</strong></p>
                            <p className="text-center mb-1"> {"ID: "+item.id} </p>
                            <div className="col text-center">
                                <button id={"btnDetalle_"+item.id} className="btn btn-primary btn-sm">Ver detalle</button>
                            </div>
                            <div className="col text-center">
                                <button id={"btn_"+item.id} className="btn btn-danger btn-sm">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item