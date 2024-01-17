import React from "react";
import BlogSection from "../components/BlogSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Breadcrumb from "../components/Breadcrumb";
const Blog = () => {
   return (
    <>
        <Preloader/>
        <Header />
        <Breadcrumb/>
        <BlogSection />
        <Footer />
    </>
   );
};

export default Blog;