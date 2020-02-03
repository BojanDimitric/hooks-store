import React, { createContext, useReducer } from 'react';

const initialState = { counter: 0 };

const store = createContext(initialState);

const { Provider } = store;

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { counter: state.counter + 1 };
        case 'dec':
            return { counter: state.counter - 1 };
        case 'res':
            return { counter: 0 };
        default: 
            return state;
    };
};

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {
    store,
    StateProvider
};
