import { ProductCard } from "../ProductCard";



export const ItemList = ({products})=> {

return(
    <>
{/*  <ProductCard products={products}/>*/}



   <div className="container">
        {
            products.map(product=>{
                return <ProductCard product={product} />
            })
        }

    </div> 

</>
)


};