import React from 'react';
import Slider from './Slider';
import SidebarItem from './SidebarItem';
import '../css/App.css';

function App() {
  return (
    <div className="container">
      <div className="div main-image" />
      <div className="div sidebar">
        <SidebarItem test="active"/>
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
