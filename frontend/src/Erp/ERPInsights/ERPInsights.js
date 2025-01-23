import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ERPInsights.css";
import axios from "axios";

function ERPInsights() {

  const [blogs, setBlogs] = useState([]); 
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`/erp-blog/${id}`); 
  };

  useEffect(() => {
    axios
      .get(`https://www.kggeniuslabs.com:5000/blogs/category/5`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row my-5 pb-5 mx-3 insightspart">
        <h1 className="text-center blogheading mb-5">Additional Insights</h1>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="col-sm-12 col-lg-4" key={blog.id}>
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
                    onClick={() => handleReadMoreClick(blog.unique_identifier)} // Pass the blog id to the handler
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ERPInsights;
