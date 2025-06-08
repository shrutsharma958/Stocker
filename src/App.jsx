import { useState } from 'react'

import HomePageWrapper from './LandingPage/home/HomePageWrapper'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPageWrapper from './LandingPage/about/AboutPageWrapper.jsx';
import SignUp from './LandingPage/signUp/SignUp.jsx';
import ProductPageWrapeer from './LandingPage/product/ProductPageWrapper.jsx'
import SupportPageWrapper from './LandingPage/support/SupportPageWrapper.jsx';
import PricingPageWrapper from './LandingPage/pricing/PricingPageWrapper.jsx';
import Navbar from './LandingPage/Navbar.jsx';
import Footer from './LandingPage/Footer.jsx';
import NotFound from './LandingPage/NotFound.jsx';
function App() {


  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageWrapper />}></Route>
          <Route path="/about" element={<AboutPageWrapper />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/product" element={<ProductPageWrapeer />}></Route>
          <Route path="/pricing" element={<PricingPageWrapper />}></Route>
          <Route path="/support" element={<SupportPageWrapper />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
