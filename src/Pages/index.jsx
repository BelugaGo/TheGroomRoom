import React from 'react'
import GroomHeader from '../Components/Header';
import Home from '../Components/Home';
import About from '../Components/About';
import Services from '../Components/Services';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';

function HomePage() {
    return (
    <>
    <GroomHeader />
    <Home />
    <About />
    <Services />
    <Gallery />
    </>
    );
}

export default HomePage;