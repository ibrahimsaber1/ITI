
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
      {Products.map(opj => {
        return (
          <Product {...opj}/> 
        )
      })}


    </main>
  )
}

export default App
