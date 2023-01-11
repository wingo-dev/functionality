import './App.css';
import { useState } from 'react';

function App() {

  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("World");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    setHeadingText(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">Functionality</header>
      <h1>{headingText}</h1>
      <div>
        <div>
          <input type='text' placeholder="input text" onChange={handleChange} />
        </div>
        <button style={{ backgroundColor: isMouseOver ? "blue" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >Submit</button>
      </div>
    </div>
  );
}

export default App;
