import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogDetailsSection from "../components/BlogDetailsSection";
import Breadcrumb from "../components/Breadcrumb";
const BlogDetails = () => {
    return (
    <>
        <Header/>
        <Breadcrumb/>
        <BlogDetailsSection/>
        <Footer/>
    </>
    )
};

export default BlogDetails;