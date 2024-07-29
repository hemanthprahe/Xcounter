import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button type = "button" onClick={increment}>Increment</button>
{/*         <button onClick={increment}>Increment</button> */}
        <button type = "button" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
