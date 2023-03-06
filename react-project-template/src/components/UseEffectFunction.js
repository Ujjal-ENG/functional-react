import React, { useEffect, useState } from 'react';

const UseEffectFunction = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');

    useEffect(() => {
        console.log('Kopa');
        document.title = `Clicked ${count} times`;
        const interval = setInterval(() => tick(), 1000);

        // unmount
        return () => {
            clearInterval(interval);
        };
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

            {/* <p>{text}</p>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p> */}
            <p>
                <button type="button" onClick={addClick}>
                    Click in the Class Component {count}
                </button>
            </p>
        </div>
    );
};

export default UseEffectFunction;
