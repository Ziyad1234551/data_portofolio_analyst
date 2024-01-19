import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Testimonial } from './components/Testimonial';
function App() {
  useEffect(() => {
    AOS.init({
      delay:500,
      easing:"ease-in-out",
      duration:1000,
      
    });
  }, [])
  return (
    <>
   <div>
    <Navbar/>
    <Hero/>
    <Project/>
    <Testimonial/>
    <Footer/>
   </div>
    </>
  );
}

export default App;
