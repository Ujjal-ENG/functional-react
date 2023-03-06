import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const addFive = () => {
        setCount((ps) => ps + 5);
    };
    return (
        <div>
            {count}

            <p>
                <button
                    type="button"
                    onClick={() => {
                        setCount((ps) => ps + 1);
                    }}>
                    Increase Variable
                </button>
            </p>

            <p>
                <button type="button" onClick={addFive}>
                    Increase Five
                </button>
            </p>
        </div>
    );
};

export default Counter;
