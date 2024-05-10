import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// import Contact from './pages/Contact';
// import Home from './pages/Home';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Portofolio from './component/Portofolio';
import Contact from './component/Contact';
import Footer from './component/Footer';



const App = () => {
  return (
    
    // <Router>
    //   <main className='w-screen min-h-screen bg-slate-100'>
    
    // <Navbar/>



    
    // <Routes>
    //     <Route path="/" Component={Home} />
    //     <Route path="/Contact" Component={Contact} />
    //   </Routes>

    //   </main>
    // </Router>

    <main className='w-screen min-h-screen bg-white'>
      {/* Navbar */}
    
    <Navbar/>

    <Home/>
    <About/>
    <Skills/>
    <Portofolio/>
    <Contact/>
    <Footer/>

{/* Intro */}

{/* About Me */}

{/* Skill */}

{/* Portofolio */}

{/* Companies */}


{/* Contact Us */}

{/* Footer */}

    </main>
  )
}

export default App