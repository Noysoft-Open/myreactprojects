import logo from './noysoft.jpg';
import './App.css';

function MyButton(){
  return (
    <button>I'm actually a Scientist.</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Noysoft</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>Components</h2>
        <MyButton />
      </div>
    </div>
  );
}

export default App;
