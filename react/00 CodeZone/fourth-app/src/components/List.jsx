import { useEffect, useState } from "react";
import Product from "./Product";

function List() {

  const [Products, SetProducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data)=>SetProducts(data.products))
    .catch((error) => console.error('Error fetching products:', error));  // Error handling;
  },[]
)

  const productsdata = Products.map((product) => {
    return <Product product={product} key={product.id}/> 
    ;
  });
  return <div className="products">
    {productsdata}
    </div>;
}

export default List;


