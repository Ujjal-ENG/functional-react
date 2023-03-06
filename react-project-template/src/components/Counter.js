import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((ps) => ps + 1);
            i += 1;
        }
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
