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

  const logotipo = logo;

  const mostrarImagen = true;

  const number = 3;
  const mostrarNumber = number > 3; //mayor de 5 es true
  // const mostrarNumber = number > 5 ? true : false; //mayor de 5 es true

  const menuGithub = [ 
    { id: 1, nombre: 'Code', url: 'https://github.com/code' },
    { id: 2, nombre: 'Issues', url: 'https://github.com/issues' },
    { id: 3, nombre: 'Pull-request', url: 'https://github.com/pull-request' },
  ] ;

  const menu = menuGithub.map(item => {
    return (
      <div>
      {item.nombre}
      </div>
    )
  }
  );

  return (
    <div className="App">
      <header className="App-header">
        

        <img src={logotipo} className="App-logo" alt="logo" />
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
      <div>
      {/* react */}
      {mostrarImagen? <img src={logotipo} className="App-logo" alt="logo" /> : 'No hay imagen para mostrar'}

      {/* vue */}
      {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" />
      <span v-else>No hay imagen</span> */}

      <div> 
        {mostrarNumber ?  'El numero es menor a 5' : 'El numero es mayor a 5'}
      </div> 

      <div> 
        {number > 5 ?  'El numero es mayor a 5' : 'El numero es menor a 5'}
      </div> 

      <div> 
      {mostrarNumber ? (
        'El numero es menor a 5' 
        )  : (
        'El numero es mayor a 5' 
        )} 
      </div>

      <div> 
      {mostrarNumber && 'El numero es mayor a 5' }
      </div>

    </div>

      <div>
        {menu}
      </div>
    
    </div>
  );
}


export default App;
