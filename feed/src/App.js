import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import logo from './images/logo.jpg';

function App() {
  const name = 'Thiago';
  const newName = name.toLowerCase();
  function sum(a,b){
    return a + b
  }
  const url = 'https://via.placeholder.com/150'
  const name2 = 'Maria'
  return (
    <div className="App">
      <h2>Isso é um cabeçalho</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src= {url} alt = "logo da empresa"/>
      <HelloWorld/>
      <SayMyName nome="Thiago" />
      <SayMyName nome="Breno" />
      <SayMyName nome={name2} />
      <img src={logo} alt="Descrição da Imagem" />
    </div> 
  );
}

export default App;
