import React from "react";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import Service from "./Service"
import Portfolio from "./Portfolio"
import Contact from "./Contact";

const Home = () => {

    return (
        <>
            <Hero />
           <Aboutus />
           <Service />
           <Portfolio />
           <Contact />
        </>
    )

}

export default Home;