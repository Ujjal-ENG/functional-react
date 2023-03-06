import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWanring] = useState('');

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : null;
        setTodo(inputValue);
        setWanring(updatedWarning);
    };
    return (
        <>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />

            <h2>{warning || 'Good Choice!!'}</h2>
        </>
    );
};

export default Todo;
