import React, { useState } from 'react'
import './Counter.css'

function UseStateEvent() {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    }
    const decrement=()=>{
        setCount(count-1);
    }

    return (
        <>
            <h1>{count}</h1>
            <div className='btn-in'>
                <button onClick={increment} className='btn-incre'>Increment</button>
                <button onClick={decrement} className='btn-decre'>Decrement</button>
            </div>

        </>
    )
}
export default UseStateEvent;
