
import Product from './components/Product'
import './App.css'
import { props } from './components/Product'

const Products:props[] = [
  {title: "I", desc: "pro 1 desc", price:"200"},
  {title: "II", desc: "pro 2 desc", price:"250"},
  {title: "III", desc: "pro 3 desc", price:"300"},
  {title: "IV", desc: "pro 4 desc", price:"150"}
]


function App() {

  return (
    <main>
    <Product title="product1" price="200$" desc="pro1 description"/>
    <Product title="product2" price="205$" desc="pro2 description"/>
    <Product title="product3" price="105$" />


    </main>
  )
}

export default App
