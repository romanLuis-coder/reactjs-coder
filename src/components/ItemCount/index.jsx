import React, { useState } from 'react';


export const ItemCount = ({initial,item,stock,onAdd}) => {
    const [count, setCount] = useState(initial);
    

function sumar() {
    if(count < stock){
        setCount(count + 1);
}
};

function restar(){
    if(count >1){
        setCount (count -1); 
}else{
    alert("La cantidad debe ser mayor a 1 item!");
}
};

    return(
        <div className="container">
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Item:{item}</p>
            <p>Stock:{stock}</p>
            <p>{count}</p>
            <button onClick={()=>{onAdd(count)}}  >Agregar al carrito</button>
        </div>
    )
  
};

