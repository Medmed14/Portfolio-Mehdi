import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
  <>
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
