import './App.css';
import FeedDeImoveis from './components/FeedDeImoveis';
import Footer from './components/Footer';
import Header from './components/Header';
import MapContainer from './components/Mapconteiner';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='div-separacao'>
      <h1>está apenas separando os componentes...</h1>
      </div>
      <FeedDeImoveis/>
      <div className='div-separacao'>
        <h1>está apenas separando os componentes...</h1>
      </div>
      <Footer/>
    </div> 
  );
}

export default App;
