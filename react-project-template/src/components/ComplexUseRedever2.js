import React, { useReducer } from 'react';

const initialState = 5;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

const ComplexUseRedever2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <div>Count- {count}</div>
                <button type="button" onClick={() => dispatch('increment')}>
                    Increment
                </button>
                <button type="button" onClick={() => dispatch('decrement')}>
                    Decrement
                </button>
            </div>

            <div>
                <div>Count2- {count2}</div>
                <button type="button" onClick={() => dispatch2('increment')}>
                    Increment
                </button>
                <button type="button" onClick={() => dispatch2('decrement')}>
                    Decrement
                </button>
            </div>
        </>
    );
};

export default ComplexUseRedever2;
