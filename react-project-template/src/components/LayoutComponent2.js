import React, { useEffect, useState } from 'react';

const LayoutComponent2 = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 768);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className={onSmallScreen ? 'small device' : 'large device'}>
            <h1>This is another components</h1>
        </div>
    );
};

export default LayoutComponent2;
