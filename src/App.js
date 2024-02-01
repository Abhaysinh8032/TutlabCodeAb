import React from 'react';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Programs from './components/Programs.jsx';
import Internship from './components/Internship.jsx';
import AboutUs from './components/AboutUs.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/SignOut.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/darkmode.js';






function App() {
  return (
     <Router>
      <Header/>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
