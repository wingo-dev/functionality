import './App.css';
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState({ fname: '', lname: '' });
  console.log(fullName);

  function handleChange(e) {
    const { value, name } = e.target;
    setFullName((prev_value) => {
      return {
        ...prev_value,
        [name]: value
      }
    });
  }

  return (
    <div className="App">
      <h1>Complex Hook</h1>
      <h2>Hello, {fullName.fname} {fullName.lname}</h2>
      <form>
        <div><input type="text" placeholder="first name" name="fname" onChange={handleChange} value={fullName.fname} /></div>
        <div><input type="text" placeholder="last name" name="lname" onChange={handleChange} value={fullName.lname} /></div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
