import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";
import Breadcrumb from "../components/Breadcrumb";
const Portfolio = () => {

    return  (
        <>
            <Header/>
            <Breadcrumb/>
            <PortfolioSection/>
            <Footer/>
        </>
    );
};

export default Portfolio;