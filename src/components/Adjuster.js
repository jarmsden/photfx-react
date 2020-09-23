import React from 'react'

export default function Slider({ min, max, value, handleChange, type }) {
    return (
        <div className="adjuster-container">
            {type === 'slider' &&
                <input 
                    className="slider" 
                    type="range" 
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleChange}
                />
            }
        </div>
    )
}
