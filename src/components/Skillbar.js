import React, { useState, useEffect } from 'react';
// import './SkillBar.css'; // Make sure to create this CSS file

const Skillbar = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);
    const [barwidth, setBarwidth] = useState(0)
    const barwidthvalue = 100;
    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(percentage);
        }, 500); // Adjust the delay based on your animation preferences

        return () => clearTimeout(timer);
    }, [percentage]);



    useEffect(() => {
        const timer = setTimeout(() => {
            setBarwidth(barwidthvalue);
        }, 495);
        return () => clearTimeout(timer);
    }, barwidthvalue)

    return (
        <div>
            <span>{skill}</span>
            <div className="skill-bar-outer" style={{ width: `${barwidth}%` }}>

                <div className="skill-bar-inner" style={{ width: `${width}%` }}>
                    <span>{percentage}%</span>
                </div>
            </div>
        </div>
    );
};

export default Skillbar;