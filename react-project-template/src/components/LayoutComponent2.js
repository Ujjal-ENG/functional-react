import useWindowWidth from './hooks/useWindowWidth';

const LayoutComponent2 = () => {
    const onSmallScreen = useWindowWidth(500);
    return (
        <div className={onSmallScreen ? 'small device' : 'large device'}>
            <h1>This is another components</h1>
        </div>
    );
};

export default LayoutComponent2;
