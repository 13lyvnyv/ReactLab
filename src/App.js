import React from 'react';
import './index.css'
import BlockInf from './BlockInf';
import img1 from './image/f3.png';
import img2 from './image/f4.png';
import img3 from './image/f5.png';

function App() {
  return (
    <div className="main">
      <div className = "container">
      <h2 className = "main__title">Что Вам необходимо?</h2>
      <div className = "main__blocks">
        <BlockInf
        img = {img1}
        alt = "First" 
        title = "Первый блок"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        <BlockInf
        img = {img2}
        alt = "Second" 
        title = "Второй блок"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"/>
        <BlockInf
        img = {img3}
        alt = "Third" 
        title = "Третий блок"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit!"/>
      </div>
    </div>
    </div>
    
  );
}

export default App;
