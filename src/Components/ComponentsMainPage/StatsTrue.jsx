import React from 'react';

const StatsTrue = (props) => {
    return (
        <>
            <p>
                {props.count}
                <sup>
                    {props.greenStats}
                </sup>
            </p>
            <div className="lines">
                <div className="line line_active"></div>
                <div className="line"></div>
                <div className="line line_active"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </>
    );
};

export default StatsTrue;