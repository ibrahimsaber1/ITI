import type { ComponentProps } from "react";

interface ProductCardProps extends ComponentProps<'div'> {
  name: string;
  price: string;
  image: string;  
}

const ProductCard = ({ name, price = 'N/A', image, children, ...props }: ProductCardProps) => {
  if(!Boolean(name)) {
    return null;
  }
  
  return (
    <div className="product-card" {...props}>
      {Boolean(image) ? 
        <img src={image} alt={`${name} image`} className="product-image" />
        :
        <h3>No image provided</h3>
      }
      <h2 className="iti-flex">{name}</h2>
      
      <p className="product-price">{Boolean(price) ? price : 'This item is currently unavilable'}</p>

      <div className="product-children">
        {Boolean(price) && children}
      </div>
    </div>
  );
};

export default ProductCard;
