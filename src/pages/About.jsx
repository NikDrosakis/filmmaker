import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import CounterBox from "../components/CounterBox";
import Testimonial from "../components/Testimonial";
import TeamSection from "../components/TeamSection";
import Breadcrumb from "../components/Breadcrumb";
const About = () => {
    return  (
        <>
            <Header />
            <Breadcrumb/>
            <AboutSection />
            <Testimonial />
            <section className="counter">
                <div className="container">
            <CounterBox number={57} title="Happy Clients" />
            <CounterBox number={10} title="Completed Projects" />
            <CounterBox number={33} title="Perspective Clients" />
            <CounterBox number={33} title="Perspective Clients" />
                    </div>
                    </section>
            <TeamSection />
            <Footer />
        </>
    );
};

export default About;