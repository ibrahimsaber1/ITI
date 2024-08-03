import { useEffect } from "react";
import Products_data from "../products";
import Product from "./Product";

function List() {
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data)=>console.log(data));
  }
)

  const products = Products_data.map((product) => {
    return product.price < 50? <Product product={product} key={product.id}/> : null
    ;
  });
  return <div className="products">
    {products}
    </div>;
}

export default List;

