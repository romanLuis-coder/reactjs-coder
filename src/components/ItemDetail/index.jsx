import React from 'react';
import whisky from './whisky.jpg';



export const ItemDetail = ({products}) => {

console.log(products); 
return (
    <>
        <div className="card mb-3">
            <img className="card-img-top" src={whisky} alt="producto whisky"></img>
            <div className="card-body">
            <h5 className="card-title"><small className="text-dark">{products.title}</small></h5>
            <p className="card-text"><small className="text-dark">{products.description}</small></p>
            <p className="card-text"><small className="text-dark">{products.price}</small></p>
            </div>
        </div> 
    </>
)
}
 export default ItemDetail; 