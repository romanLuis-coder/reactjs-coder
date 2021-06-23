

export const ProductCard = ({product})=> {

    return(
    <div className="card bg-dark mb-3" >
        <div className="card-header">Producto {product.id}</div>
        <div className="card-body">
        <h5 className="card-title"> {product.name} </h5>
        <h5 className="card-title"> {product.title} </h5>
        <h5 className="card-title"> {product.price}  </h5>
        <h5 className="card-title"> {product.description} </h5>
        <h5 className="card-title"> {product.pictureUrl} </h5>
        </div>
    
    </div>
    
    )
    
    
    };