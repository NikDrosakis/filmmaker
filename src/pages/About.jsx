import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SectionBegin from "../components/SectionBegin";
import Testimonial from "../components/Testimonial";
import TeamSection from "../components/TeamSection";

const About = () => {
    return  (
        <>
      <Header />
      <Breadcrumb />
      <SectionBegin />
      <Testimonial />
      <TeamSection />
      <Footer />
        </>
    );
};

export default About;