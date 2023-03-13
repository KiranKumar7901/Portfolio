import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Services from './Component/Services/Services';
import Experience from './Component/Experience/Experience';
import Work from './Component/Work/Work';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
