import React, { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Счет: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};
