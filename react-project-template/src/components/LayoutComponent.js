import useWindowWidth from './hooks/useWindowWidth';

const LayoutComponent = () => {
    const onSmallScreen = useWindowWidth();
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small device' : 'large device'}</h1>
        </div>
    );
};

export default LayoutComponent;
