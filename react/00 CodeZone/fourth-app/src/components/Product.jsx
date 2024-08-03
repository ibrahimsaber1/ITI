function Product(props){
    return (
        <div  className="product-cart">
        <img src={props.product.image} alt="Product" width={150}/>
      <h4>{props.product.title}</h4>
      <h4>{props.product.price}</h4>
      <p>{props.product.description}</p>
      </div>
    )
}

export default Product