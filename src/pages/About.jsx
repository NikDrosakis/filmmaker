import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import AboutSection from "../components/AboutSection";
import CounterSection from "../components/CounterSection";
import Testimonial from "../components/Testimonial";
import TeamSection from "../components/TeamSection";
import Breadcrumb from "../components/Breadcrumb";
const About = () => {
    return  (
        <>
            <Preloader />
            <Header />
            <Breadcrumb/>
            <AboutSection />
            <Testimonial />
            <CounterSection />
            <TeamSection />
            <Footer />
        </>
    );
};

export default About;