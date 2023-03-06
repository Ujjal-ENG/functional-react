import React, { useEffect, useState } from 'react';

const UseEffectFunction = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        document.title = `Clicked ${count} times`;
        setInterval(() => tick(), 1000);
    }, [count]);

    const addClick = () => {
        setCount((ps) => ps + 1);
    };

    const tick = () => {
        setDate(new Date());
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click in the Class Component {count}
                </button>
            </p>
        </div>
    );
};

export default UseEffectFunction;
