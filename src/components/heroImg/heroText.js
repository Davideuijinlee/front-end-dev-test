import React from 'react';

export default props => {
    return (
        <div className="heroTextContainer fadeText">
            <h1 className="heroText">
                <svg viewBox="0 0 10 2">
                    <text x="5" y="1" textAnchor="middle" fontSize=".7" fill="none" strokeWidth=".03" stroke="#fff" fontFamily="sans-serif">WELCOME TO</text>
                </svg>
                <div className="heroTextCompany">ROOSTER GRIN</div>
            </h1>
        </div>
    )
}