import React, { useEffect, useRef } from 'react';
import Input from './Input';

const Form = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <Input ref={inputRef} type="text" placeholder="Enter Something" />
            <h1>Hello</h1>
        </div>
    );
};

export default Form;
