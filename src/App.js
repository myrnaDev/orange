import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import QueHacemos from './components/QueHacemos';
import Divider from './components/Divider';
import Nuestrotrabajo from './components/Nuestrotrabajo';
import Equipamiento from './components/Equipamiento';
import Comosubir from './components/Comosubir';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <QueHacemos />
      <Divider />
      <Nuestrotrabajo />
      <Equipamiento />
      <Comosubir />
      <Contacto />
      <Footer />
    </Router>
  );
}

export default App;
