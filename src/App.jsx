import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
       <main>
           <NavBar/>
           <Hero/>
           <ProductViewer/>
           <Showcase/>
           <Performance/>
           <Features/>
       </main>
        )
}
export default App
