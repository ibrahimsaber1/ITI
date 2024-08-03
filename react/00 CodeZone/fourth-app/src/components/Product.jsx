function Product(props) {
  const { title, price, description, images } = props.product;

  return (
    <div className="product-cart">
      {/* Select the first image in the array */}
      <img src={images[0]} alt={title} width={150} />
      <h4>{title}</h4>
      <h4>${price.toFixed(2)}</h4> {/* Format price to two decimal places */}
      <p>{description}</p>
    </div>
  );
}

export default Product;