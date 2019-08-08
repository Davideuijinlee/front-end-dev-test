import React, { Fragment, useState, useEffect, useRef } from 'react';

export default props => {
    // Usage
    // Ref for the element that we want to detect whether on screen
    const ref = useRef();
    // Call the hook passing in ref and root margin
    // In this case it would only be considered onScreen if more ...
    // ... than 300px of element is visible.
    const onScreen = useOnScreen(ref, '-300px');

    return (
        <Fragment>
                <div className="largeReviewTextContainer">
                    ) : (
            <h1 className="largeReviewText offset-lg-3 col-lg-6">Lorem ipsum</h1>
                    <h1 className="largeReviewText offset-lg-3 col-lg-6">dolor sit amet</h1>
                </div>

                <div ref={ref} className={`{ onScreen ? '#23cebd' : '#efefef'
                }starsContainer offset-lg-3 col-lg-6`}>
                    <div className="">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    )}
        </div>
        </Fragment>
    
        );
    }
    
    
    // Hook
function useOnScreen(ref, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
        
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
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
        }, []); // Empty array ensures that effect is only run on mount and unmount
    
        return isIntersecting;
    }
