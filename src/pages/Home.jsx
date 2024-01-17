import React from "react";
import Header from "../components/Header";
import LatestBlog from "../components/LatestBlog";
import ActionSection from "../components/ActionSection";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import SectionBegin from "../components/SectionBegin";
import WorkSection from "../components/WorkSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Preloader from "../components/Preloader";
const Home = () => {
    return (
        <>
            <Preloader/>
            <Header/>
            <HeroSection/>
            <ServicesSection/>
            <WorkSection/>
            <SectionBegin/>
            <AboutSection/>
            <TeamSection/>
            <LatestBlog/>
            <ActionSection/>
            <Footer/>
        </>
    );
};

export default Home;