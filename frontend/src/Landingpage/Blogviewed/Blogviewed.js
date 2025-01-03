import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blogviewed.css";
import axios from "axios";
import { Helmet } from 'react-helmet';
function Blogviewed() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    setBlogs([]);
    if (selectedCategory === "All") {
      axios
        .get(`https://www.kggeniuslabs.com:5000/blogs?t=${Date.now()}`)
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .catch((err) => console.error("Error fetching blogs:", err));
    } else if (categoryId) {
      axios
        .get(
          `https://www.kggeniuslabs.com:5000/mainblogs/category/${categoryId}?t=${Date.now()}`
        )
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .catch((err) => console.error("Error fetching category blogs:", err));
    }
  }, [selectedCategory, categoryId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "SAP":
        setCategoryId(1);
        break;
      case "IT":
        setCategoryId(2);
        break;
      case "DM":
        setCategoryId(3);
        break;
      default:
        setCategoryId(null);
        break;
    }
  };

  // Determine path based on category_id
  const getPath = (category_id, unique_identifier) => {
    switch (category_id) {
      case 1:
        return `/sap-blog/${unique_identifier}`;
      case 2:
        return `/it-blog/${unique_identifier}`;
      case 3:
        return `/digital-marketing-blog/${unique_identifier}`;
      default:
        return "/";
    }
  };

  return (
    <>
    <Helmet>
    <title> Insights & Trends | KG Genius Labs Blog on SAP & IT Solutions</title>
        <meta name="description" content="Explore the latest trends in SAP S/4HANA, digital transformation, and IT solutions with KG Genius Labs. Our blog offers valuable insights and strategies for businesses and professionals." />
        <meta name="keywords" content=" KG Genius Labs Blog, SAP S/4HANA Insights, IT Solutions Trends, Digital Marketing Blog, Business Technology Strategies, Latest SAP Trends, IT Innovation Insights, ERP Solutions , SAP S/4HANA Implementation Strategies" />
        <link rel="canonical" href="https://www.kggeniuslabs.com/blog" />
      </Helmet>

    <div className="container-fluid">
      <h1 className="text-center headblog mb-5">
        <b>Additional Insights</b>
      </h1>
      <div className="row m-4">
        <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
          {["All", "SAP", "IT", "DM"].map((category) => (
            <Link
              key={category}
              className={`lnkfnt ${
                selectedCategory === category ? "active" : ""
              } col-12 col-md-auto text-start mb-2 mb-md-0`}
              onClick={() => handleCategoryClick(category)}
            >
              {category === "IT" ? "IT Services" : category}
            </Link>
          ))}
        </div>
      </div>

      <div className="row">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`col-sm-12 col-lg-5 ${
              index % 2 === 0 ? "offset-lg-1" : "offset-lg-1 right-card"
            }`}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={getPath(blog.category_id, blog.unique_identifier)}
            >
              <div className="card shadowcard my-4">
                <img
                  src={blog.blog_image}
                  alt={blog.title}
                  className="card-img-top cm1"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{blog.title}</b>
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Blogviewed;
