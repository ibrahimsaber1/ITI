import type { ComponentProps } from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: string;
  image: string;  
}

const ProductCard = ({ name, price = 'N/A', image, children, ...props }: ProductCardProps) => {
  return (
    <div className="product-card" {...props}>

      <img src={image} alt={`${name} image`} className="product-image" />

      <h2 className="product-name">{name}</h2>
      
      <p className="product-price">{price}</p>

      <div className="product-children">

        {children}
      </div>
    </div>
  );
};

export default ProductCard;
