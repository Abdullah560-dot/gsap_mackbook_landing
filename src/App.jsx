import React, { Suspense, lazy } from 'react';
import NavBar from "./components/NavBar.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Lazy load components
const Hero = lazy(() => import("./components/Hero.jsx"));
const ProductViewer = lazy(() => import("./components/ProductViewer.jsx"));
const Showcase = lazy(() => import("./components/Showcase.jsx"));
const Performance = lazy(() => import("./components/Performance.jsx"));
const Features = lazy(() => import("./components/Features.jsx"));
const Highlights = lazy(() => import("./components/Highlights.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

const App = () => {
  return (
    <main>
      <NavBar />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
