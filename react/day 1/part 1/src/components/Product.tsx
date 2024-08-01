
export type props={
    title: string;
    price: string;
    desc?: string;
}

function Product({title,price,desc}: props) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{price}</p>
            <div>
                <button>Add To Cart</button>
                <button>WishList</button>
            </div>
        </div>
    )
}

export default Product;