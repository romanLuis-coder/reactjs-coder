import React from 'react';
import whisky from './whisky.jpg'



export const ItemDetail = ({products}) => {

console.log(products); 
return (
    <>
        <div className="container-lg">
           <img src={whisky} alt="producto whisky" />
            <h4> {products.price} </h4>
            <h4> {products.title} </h4>
        </div>
    </>
)
}
 export default ItemDetail; 