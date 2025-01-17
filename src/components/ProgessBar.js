import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                <div className="progress-bar-handle"></div>
            </div>
        </div>
    );
};

export default ProgressBar;