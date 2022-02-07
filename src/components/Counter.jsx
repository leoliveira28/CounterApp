import { useState } from 'react';
import './counterStyles.css'
export function Counter() {
    const [counter, setCounter] = useState(0)
    
    
    function incrementCounter() {
        setCounter(counter + 1) 
    }
    
    function decrementCounter() {
        setCounter(counter - 1)
        if(counter === 0) {
            setCounter(0)
        }
    }
    return (
        <div className="content">
                    <h1>React Counter App</h1>

        <h1>{counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        </div>
        )
}