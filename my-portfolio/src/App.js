
import './App.css';
 import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/nav/nav';  
 import Home from './components/home/home';
import Skills from './components/skills/skills';
 import Services from './components/service/service';
 import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Testimonials from './components/testimonials/testimonials';
import Education from './components/education/education';
import Project from './components/projects/projects';


function App() {
  return (
    <>
  <Navbar/>
  <Home/>
     <Skills/>
     <Education/>
     <Experience/>
     <Testimonials/>
     <Services/>
     <Project/>
     <Contact/>
      </>
  
  )
}


export default App;

 {/* <About/>
     <Skills/>
     <Services/>
     <Contact/> */}
