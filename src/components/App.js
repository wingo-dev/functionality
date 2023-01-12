import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [headingText, setHeadingText] = useState('');
  const [isMouseOver, setMouseOver] = useState(false);


  function handleClick() {
    setHeadingText(name);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="App">
      <header className="App-header">Functionality</header>
      <h1>Hello, {headingText}</h1>
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
