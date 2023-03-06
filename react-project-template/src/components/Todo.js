import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });

    const { title, description } = todo;
    return (
        <>
            <p>{title || description}</p>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value
                        })
                    }
                />
            </p>
            <p>
                <textarea
                    name="todo"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value
                        })
                    }
                />
            </p>
            <hr />

            <h2>{null || 'Good Choice!!'}</h2>
        </>
    );
};

export default Todo;
