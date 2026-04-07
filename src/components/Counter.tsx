import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <div className="main-container">
      <h1>{count}</h1>

      <div className="btn-group">
        <button className="btn" onClick={() => setcount(count+1)}>
          Increment
        </button>

        <button className="btn" onClick={() => setcount(count- 1)}>
          Decrement
        </button>

        <button className="btn reset" onClick={() => setcount(0)}>
          Restart
        </button>
      </div>
    </div>
  )
}

export default Counter;


 