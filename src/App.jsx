import React from "react";
import Navbar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
