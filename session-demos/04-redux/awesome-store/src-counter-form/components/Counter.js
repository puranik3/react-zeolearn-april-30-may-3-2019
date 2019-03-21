import React from 'react';

function Counter( props ) {
    const { counter, increment, decrement } = props;
    
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;