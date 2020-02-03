import React, { useContext } from 'react';

import { store } from '../store';

const Control = () => {
    const { state: { counter } } = useContext(store);
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <p>
                This component access global state via react's useContext hook<br />
                which is provided by react store's useReducer hook!
            </p>
        </div>
    );
};

export default Control;
