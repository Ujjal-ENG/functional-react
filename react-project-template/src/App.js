import React, { useState, useCallback } from 'react';
import Button from './components/Button';
import ShowCount from './components/ShowCount';

const App = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((ps) => ps + 1);
    }, []);
    const incrementByFive = useCallback(() => {
        setCount2((ps) => ps + 5);
    }, []);

    return (
        <div>
            <h1>This use Callback hooks learning purpose</h1>
            <ShowCount count={count1} title="Counter 1" />
            <Button handleClick={incrementByOne}>Increment By One!!</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment By Five!!!</Button>
        </div>
    );
};

export default App;
