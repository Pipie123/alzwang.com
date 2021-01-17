import React from "react";
import Hero from "./components/Hero"
import Header from "./components/Header";
import MiddleSection from "./components/Section/MiddleSection";
import RightSection from "./components/Section/RightSection";
import LeftSection from "./components/Section/LeftSection";
import Footer from "./components/Footer/Footer";
const App = () => (
    <div>
        <Header/>
        <Hero />
        <MiddleSection />
        <RightSection />
        <LeftSection/>
        <Footer/>
    </div>
);

export default App
