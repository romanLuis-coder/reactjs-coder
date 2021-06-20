import React, { useState } from 'react';


export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    

function onAdd() {
    if(count < props.stock){
        setCount(count + 1);
}
};

function onSubstract(){
    if(count >1){
        setCount (count -1); 
}else{
    alert("La cantidad debe ser mayor a 1 item!")
}
};

    return(
        <div className="container">
            <button onClick={onAdd}>+</button>
            <button onClick={onSubstract}>-</button>
            <p>Item:{props.item}</p>
            <p>Stock:{props.stock}</p>
            <p>{count}</p>
            <button>Agregar al carrito</button>
        </div>
    )
  
};