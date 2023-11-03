import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyName from './components/SayMyName';
import logo from './images/logo.jpg';
import MapContainer from './components/Mapconteiner';

function App() {
  return (
    <div className="App">
      <div id='logo'>
        <img src={logo} alt='app logo' id='corner-logo'></img>
      </div>
      <MapContainer></MapContainer>
    </div> 
  );
}

export default App;
