import { useState } from 'react';
import './Counter.css'

function Counter() {
    const [currentCount, setCurrentCount] = useState(0);

    const increment = () => {
        setCurrentCount(currentCount + 1);
    };

    const decrement = () => {
        setCurrentCount(currentCount - 1);
    };

    return (
        <div className="counter">
            <h1 className='blink'>USE STATE EXAMPLE</h1>
            <h2>Count: {currentCount}</h2>
            <div className="buttons">
                <button className="increment-btn" onClick={increment}>Increment</button>
                <button className="decrement-btn" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter