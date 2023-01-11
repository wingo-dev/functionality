import './App.css';

function App() {
  const headingText = "Hello";
  return (
    <div className="App">
      <header className="App-header">Functionality</header>
      <h1>{headingText}</h1>
      <div>
        <div>
          <input type='text' placeholder="input text" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
