import React from 'react';

const ShowCount = ({ count, title }) => {
    console.log(`Rendering ${title}`);
    return (
        <>
            <h4>
                {title} is {count}
            </h4>
        </>
    );
};

export default React.memo(ShowCount);
