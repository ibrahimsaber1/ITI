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
          <button className=''>Add to Cart</button>
          <button>Wishlist</button>
        </ProductCard>
      ))}
    </main>
  )
}

export default App
