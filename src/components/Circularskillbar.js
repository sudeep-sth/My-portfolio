import React, { useState, useEffect } from 'react';
// import './AnimatedCircularSkillBar.css'; // Make sure to create this CSS file

const CircularSkillBar = ({ skill, percentage }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const progressOffset = (100 - percentage) / 100 * 314.16; // 314.16 is approximately 2 * Math.PI * 50 (radius)

        setOffset(progressOffset);
    }, [percentage]);

    return (
        <div className="animated-circular-skill-bar">
            <svg className='svg'>
                <circle className="background-circle" cx="60" cy="60" r="50"></circle>
                <circle className="progress-circle" cx="60" cy="60" r="50" style={{ strokeDashoffset: offset }}></circle>
            </svg>
            <div className="skill-text">
                <span>{percentage}%</span>
            </div>
            {/* <span>{skill}</span> */}
        </div >
    );
};

export default CircularSkillBar;
