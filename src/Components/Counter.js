import React, { useContext } from 'react';

import { store } from '../store';

const Counter = () => {
    const { state: { counter }, dispatch } = useContext(store);
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button style={{ width: '50px'}} onClick={() => dispatch({ type: 'inc' })}>Inc</button>
            <br />
            <button style={{ width: '50px'}} onClick={() => dispatch({ type: 'dec' })}>Dec</button>
            <br />
            <button style={{ width: '50px'}} onClick={() => dispatch({ type: 'res' })}>Res</button>
        </div>
    );
};

export default Counter;
