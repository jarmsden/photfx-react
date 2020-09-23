import React, { useState } from 'react';
import Slider from './Adjuster';
import SidebarItem from './SidebarItem';
import { DEFAULT_OPTIONS } from '../constants';
import '../css/App.css';

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if(index !== selectedOptionIndex) return option
        return { ...option, value: target.value}
      })
    })
  }

  function GetImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ')}
  }

  console.log(GetImageStyle())
  
  return (
    <div className="container">
      <div className="div main-image" style={GetImageStyle()} />
      <div className="div sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          )
        })}
      </div>
      <Slider 
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
        type={selectedOption.type}
      />
    </div>
  );
}

export default App;
