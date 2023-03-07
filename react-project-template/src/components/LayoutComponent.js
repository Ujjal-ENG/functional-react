import React, { useEffect, useState } from 'react';

const LayoutComponent = () => {
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
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small device' : 'large device'}</h1>
        </div>
    );
};

export default LayoutComponent;
