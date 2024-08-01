import data from './data/products.json';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <main className='container'>

      {data.map(record => (
        <ProductCard 
          name={record.name}
          price={record.price} 
          image={record.image} 
          className="custom-card"
        >
          <button>Add to Cart</button>
          <button>Wishlist</button>
          <button>Remove</button>
        </ProductCard>
      ))}
      
    </main>
  )
}

export default App
