import { Link } from "react-router-dom"


const Item = ({item}) => {
    return (

                        <div className="item__galeriaCollage col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                            <div>
                            <Link to={`/itemDetalle/${item.id}`}><img src={item.foto} alt={"microbloqueo_"+item.id}/></Link>
                            </div>
                            <h5 className="text-center my-2">{item.nombre}</h5>
                            <p className="text-center mb-2"><strong> {item.precio+" CLP"}</strong></p>
                            <p className="text-center mb-1"> {"ID: "+item.id} </p>
                            <div className="col text-center">
                                <Link to={`/itemDetalle/${item.id}`}><button id={"btnDetalle_"+item.id} className="btn btn-success btn-sm">Ver Detalle</button></Link>
                            </div>
                            
                        </div>
    )
}

export default Item