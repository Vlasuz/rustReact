import React from 'react';

const AsyncImages = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} />
        );
    }
    return (
        <div className={"loading-skin"}>
            <div className="load">
                <div className="load__line">

                </div>
                <div className="load__line">

                </div>
                <div className="load__line">

                </div>
            </div>
        </div>
    );
};

export default AsyncImages;