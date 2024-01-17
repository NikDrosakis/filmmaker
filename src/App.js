import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
const App=()=> {
    useEffect(() => {
        // Set background images when the component mounts
        const setBgElements = document.querySelectorAll('.set-bg');
        setBgElements.forEach((element) => {
            const bg = element.dataset.setbg;
            element.style.backgroundImage = `url(${bg})`;
        });
    }, []); // Run this effect only once when the component mounts
        return (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
        );
}

export default App;
