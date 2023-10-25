import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
  const name = 'Thiago';
  const newName = name.toLowerCase();
  function sum(a,b){
    return a + b
  }
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Isso é um cabeçalho</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src= {url} alt = "logo da empresa"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
