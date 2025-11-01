import React, { Suspense, lazy } from "react";
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
// مكون التحميل الثابت
const Loader = () => (
  <div className="text-center h-[100vh] flex items-center justify-center text-gray-500 animate-pulse">
    Loading...
  </div>
);
const App = () => {
  return (
    <main>
      <NavBar />
      <Suspense fallback={<Loader />}>
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
