import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill('white'));

  const handleClick = (index) => {
    if (colors[index] !== 'white') return; // Ignore already clicked

    const newClickedOrder = [...clickedOrder, index];
    const newColors = [...colors];
    newColors[index] = 'green';
    setClickedOrder(newClickedOrder);
    setColors(newColors);

    if (index === 8) {
      // Last box clicked
      changeToOrange(newClickedOrder);
    }
  };

  const changeToOrange = (order) => {
    let delay = 0;
    order.forEach((idx, i) => {
      setTimeout(() => {
        setColors(prevColors => {
          const newColors = [...prevColors];
          newColors[idx] = 'orange';
          return newColors;
        });
      }, delay);
      delay += 500;
    });
  };

  return (
    <div className="container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default App;

