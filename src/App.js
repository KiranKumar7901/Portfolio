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
import { themeContext } from './context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'var(--blackbg)' : '',
      color: darkMode? 'var(--blueCard)':''}}>
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
