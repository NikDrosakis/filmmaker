import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogDetailsSection from "../components/BlogDetailsSection";
import Preloader from "../components/Preloader";
import Breadcrumb from "../components/Breadcrumb";
const BlogDetails = () => {
    return (
    <>
        <Preloader/>
        <Header/>
        <Breadcrumb/>
        <BlogDetailsSection/>
        <Footer/>
    </>
    )
};

export default BlogDetails;