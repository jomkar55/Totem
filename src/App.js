import './App.css';
import Accordian from './components/accordian/Accordian';
import CallTo from './components/callto/Callto';
import Card from './components/card/Card';
import Cities from './components/cities/Cities';
import Collection from './components/collection/Collection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CallTo />
      <Accordian/>
      <Footer/>

    </div>
  );
}

export default App;
