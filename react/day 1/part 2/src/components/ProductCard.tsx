import type { ComponentProps } from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: string;
  image: string;  
}

const ProductCard = ({ name, price, image, children, ...props }: ProductCardProps) => {
  
  let img = null ;
  if(image){
    img = <img src={image} alt={`${name} image`} className="product-image" />
  }else{
    img= <h3>Image Not Found :)</h3>
  }


  return (
    <div className="product-card" {...props}>

      {img}
      
      <h2 className="product-name">{name}</h2>
      
      <p className="product-price">{Boolean(price)? price : "this item not avilable currently"}</p>

      <div className="product-children">

        {children}
      </div>
    </div>
  );
};

export default ProductCard;
