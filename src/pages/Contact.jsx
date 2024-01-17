import React from "react";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Breadcrumb from "../components/Breadcrumb";
const Contact = () => {
    return (
        <>
        <Preloader/>
        <Header/>
        <Breadcrumb/>
        <ContactSection/>
        <Footer/>
    </>
    );
};

export default Contact;