import './App.css';
import FeedDeImoveis from './components/FeedDeImoveis';
import Footer from './components/Footer';
import Header from './components/Header';
import MapContainer from './components/Mapcontainer';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeedDeImoveis/>
      <Footer/>
    </div> 
  );
}

export default App;
