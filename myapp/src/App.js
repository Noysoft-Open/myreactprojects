import logo from './noysoft.jpg';
import './App.css';

function MyButton(){
  return (
    <button className="Identity">I'm actually a Scientist.</button>
  );
}

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <div className="MyLogo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="HeaderTitle">
            <h1>Welcome to Noysoft</h1>
          </div>
      </header>

      <div className="Component-1">
        <h2>Component 1</h2>
        <MyButton />
      </div>
      
      <div className="Component-2">
        <h2>Component 2</h2>
      </div>

      <div className="Component-2">
        <h2>Component 2</h2>
      </div>
      
      <div className="Component-2">
        <h2>Component 2</h2>
      </div>
      
      <div className="Component-2">
        <h2>Component 2</h2>
      </div>
      
      <div className="Component-2">
        <h2>Component 2</h2>
      </div>
    
    </div>
  );
}

export default App;
