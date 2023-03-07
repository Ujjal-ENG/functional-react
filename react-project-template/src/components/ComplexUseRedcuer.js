import React, { useReducer } from 'react';

const initialState = {
    counter: 0,
    counter1: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value };
        case 'decrement':
            return { ...state, counter: state.counter - action.value };
        case 'increment1':
            return { ...state, counter1: state.counter1 + action.value };
        case 'decrement1':
            return { ...state, counter1: state.counter1 - action.value };
        default:
            return state;
    }
};

const ComplexUseRedcuer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <div>Count - {count.counter}</div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'increment',
                            value: 1
                        })
                    }>
                    Increment by 1
                </button>

                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'decrement',
                            value: 1
                        })
                    }>
                    Decrement by 1
                </button>
            </div>

            <div>
                <div>Count - {count.counter1}</div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'increment1',
                            value: 1
                        })
                    }>
                    Increment by 1
                </button>

                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'decrement1',
                            value: 1
                        })
                    }>
                    Decrement by 1
                </button>
            </div>
        </>
    );
};

export default ComplexUseRedcuer;
