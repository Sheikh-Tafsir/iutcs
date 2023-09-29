import React from "react";
import  Card  from "./blog_components/BlogCard";
import "../../styles/Blogdetails.css"; // Create a CSS file for your Home component
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export const BlogsHome = () => {
  return (
    <>
      {/* <Navigation Section> */}
      <Navbar/>
      <section className="cover-section">
        <div className="cover-image">
          <img
            src="https://st4.depositphotos.com/21389766/23111/i/450/depositphotos_231117658-stock-photo-application-choice-form-document-survey.jpg" // Replace with your cover image URL
            alt="Cover"
          />
        </div>
        <div className="cover-text">
          <h1>BLOGS</h1>
        </div>
      </section>
      <section className="blog-section">
        <Card />
      </section>
      <Footer/>
    </>
  );
};
export default BlogsHome;