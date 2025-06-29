import React, { useState } from "react";
import * as styles from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2 className={styles.btn}>Счет: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};
