import React from "react";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import CallToAction from "../components/CallToAction";
import LogoBegin from "../components/LogoBegin";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
const Services = () => {
    return  (
        <>
            <Header/>
            <Breadcrumb/>
            <ServicesSection/>
            <CallToAction/>
            <LogoBegin/>
            <Footer/>
        </>
    )
};

export default Services;