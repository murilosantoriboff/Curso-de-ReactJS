import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'

function App() {
return (
  <div className="App">
    <HelloWorld/>
    <SayMyName nome="Joao"/>
    <Pessoa nome="Andre" idade="20" profissao="Marceneiro" foto="https://via.placeholder.com/150"/>
    <List marca="Ferrari" ano_lancamento={2019}/>
    <List />
  </div>
  );
}

export default App;
