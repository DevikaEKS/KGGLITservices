import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Insights.css";
import axios from "axios";

function Insights() {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const navigate = useNavigate();

  // Function to navigate based on category_id and blog id
  const handleReadMoreClick = (categoryId, blogId) => {
    // You can use the blogId in your route if needed
    if (categoryId === 1) {
      navigate(`/sap-blog/${blogId}`); // Pass blogId in URL
    } else if (categoryId === 2) {
      navigate(`/it-blog/${blogId}`); // Pass blogId in URL
    } else if (categoryId === 3) {
      navigate(`/digital-marketing-blog/${blogId}`);
     } else if (categoryId === 5) {
        navigate(`/erp-blog/${blogId}`); // Pass blogId in URL
    } else {
      console.warn("Unknown category ID:", categoryId);
    }
  };

  useEffect(() => {
    // Fetch latest three blogs from the API
    axios
      .get(`https://www.kggeniuslabs.com:5000/latestThreeBlogs`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data); // Set the fetched blog data to state
      })
      .catch((err) => {
        console.error("Error fetching latest blogs:", err);
      });
  }, []);

  return (
    <div className="container-fluid" id="blogs">
      <div className="row my-5 pb-5 insightspart">
        <h1 className="text-center evolheading mb-5">
          <b>Additional Insights</b>
        </h1>

        {blogs.length === 0 ? ( // Check if there are no blogs
          <div className="col-12 text-center">
            <p>No blogs available.</p>
          </div>
        ) : (
          blogs.map(
            (
              blog // Map over the fetched blogs
            ) => (
              <div key={blog.id} className="col-sm-12 col-lg-4">
                <div className="card colourcard text-light my-3 h-80">
                  <img
                    src={blog.blog_image} // Use the fetched image URL
                    title={blog.title}
                    alt={blog.title} // Use title as alt text
                    className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b className="title-ellipsis">{blog.title}</b>
                    </h5>
                    <button
                      className="readbtn rounded-3 p-2"
                      onClick={() =>
                        handleReadMoreClick(blog.category_id, blog.unique_identifier)
                      } // Pass both category_id and id
                    >
                      Read More
                    </button>
                    <div className="py-3"></div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Insights;
