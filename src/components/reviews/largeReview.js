import React, { useState, useEffect, useRef } from 'react';

export default () => {

    const ref = useRef();
    const onScreen = useOnScreen(ref, '-150px');

    return (
        <div className="d-inline-block largeReviewContainer col-lg-6">
            <div className="largeReviewTextContainer">
                <div className="row">
                    <h1 className="largeReviewText offset-2 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6">Lorem ipsum</h1>
                    <h1 className="largeReviewText offset-2 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6">dolor sit amet</h1>
                </div>
            </div>
            <div ref={ref} className={`stars medAdjustment offset-3 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6`}>
                {onScreen ? (
                    <div className="starsContainerNoScroll">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                    </div>
                ) : (
                        <div className='starsContainerScroll'>
                            <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                        </div>
                    )}
            </div>
        </div>
    );
}

// Hook
function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);
    return isIntersecting;
}
