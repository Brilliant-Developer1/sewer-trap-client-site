import './App.css';
import React from 'react';
import HideAppBar from './Components/nav-bar/HideAppBar';
import Navbar from './Components/nav-bar/Navbar';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div>
      {/*<HideAppBar></HideAppBar>*/}
      <Navbar />
      <Header></Header>
      <Services></Services>
      <AboutUs></AboutUs>
      <Testimonials />
      <ContactUs></ContactUs>
      <Footer />
    </div>
  );
}

export default App;
