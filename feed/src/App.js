import './App.css';
import FeedDeImoveis from './components/FeedDeImoveis';
import Footer from './components/Footer';
import Header from './components/Header';

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
