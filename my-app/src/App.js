import logo from './logo.svg';
import './App.css';

function HelloWorld() {

  const nombre = "John Connor";
  return (
    <div className="Hola">
      <h1>Hello World</h1>
      <p>Ni nombre es: {nombre}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld />
    </div>
  );
}

export default App;
