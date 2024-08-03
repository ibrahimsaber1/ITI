import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  return (
    <>
      <h1>hello world</h1>
      <h1>{counter}</h1>
      <button onClick={()=> {setCount(counter + 1)
        }}
        >
        +
      </button>
          <button onClick={()=> {setCount(counter - 1)
            }}
            >
            -
          </button>
        </>
  )
}

export default App
