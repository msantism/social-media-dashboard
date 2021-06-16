import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';

function App() {

  return (
    <section className="componentes">
      <Header/>
      <Slider/>
      <Cuerpo/>
      <Footer/>
    </section>
  )
};

export default App;
