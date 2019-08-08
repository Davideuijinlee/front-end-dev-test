import React, { Fragment, useState, useEffect, useRef } from 'react';

export default props => {
    // Usage
    // Ref for the element that we want to detect whether on screen
    const ref = useRef();
    // Call the hook passing in ref and root margin
    // In this case it would only be considered onScreen if more ...
    // ... than 300px of element is visible.
    const onScreen = useOnScreen(ref, '-150px');

    return (
        <div className="d-inline-block largeReviewContainer col-lg-6">
            <div className="largeReviewTextContainer">
                <div className="row">
                    <h1 className="largeReviewText offset-2 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6">Lorem ipsum</h1>
                    <h1 className="largeReviewText offset-2 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6">dolor sit amet</h1>
                </div>
            </div>
            <div ref={ref} className={`stars offset-3 offset-sm-3 offset-md-4 offset-lg-3 col-lg-6`}>
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
