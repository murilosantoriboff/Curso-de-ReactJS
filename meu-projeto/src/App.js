import './App.css';

function App() {
  const name = "Murilo"

  function sum(a,b) {
    return a+b
  }

  const img = 'https://placeholder.com/150'

  return (
    <div className="App">
      <h1>Ola React</h1>
      <p>Ola {name}</p>
      <p>Soma {2+2}</p>
      <p>Soma {sum(8,7)}</p>
      <img alt="Imagem" src={img}/>
    </div>
  );
}

export default App;
