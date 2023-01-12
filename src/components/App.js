import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [headingText, setHeadingText] = useState('');
  const [isMouseOver, setMouseOver] = useState(false);


  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
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
        <form>
          <div>
            <input type='text' placeholder="input text" onChange={handleChange} />
          </div>
          <button type="submit" style={{ backgroundColor: isMouseOver ? "blue" : "white" }}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
