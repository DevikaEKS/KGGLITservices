import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dmblog.css";
import axios from "axios";

function Dmblog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`/digital-marketing-blog/${id}`); 
  };

  useEffect(() => {
    axios
      .get(`https://www.kggeniuslabs.com:5000/blogs/category/3`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row my-5 pb-5 mx-3 insightspart">
        <h1 className="text-center blogheading mb-5">Additional Insights</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="col-sm-12 col-lg-4">
            <div className="card colourcard text-light my-3">
              <img
                src={blog.blog_image} 
                title={blog.title}
                alt={blog.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title title-ellipsis">{blog.title}</h5>
                <button
                  className="readbtn rounded-3 p-2"
                  onClick={() => handleReadMoreClick(blog.unique_identifier)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dmblog;
