import React from 'react';

const Input = ({ type, placeholder }, ref) => {
    return (
        <div>
            <h1>Hello: </h1>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
};
const forwardRefInput = React.forwardRef(Input);
export default forwardRefInput;
