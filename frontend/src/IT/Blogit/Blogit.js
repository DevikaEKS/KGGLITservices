import React, { useEffect, useState } from "react";
import "./Blogit.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Blogit() {
  const { id } = useParams();
  // const decodedId = atob(id)
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    // Fetch the main blog data
    axios
      .get(`https://www.kggeniuslabs.com:5000/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setCategoryId(res.data.category_id);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [id]);

  useEffect(() => {
    // Fetch related blogs based on category_id and exclude the current blog
    if (categoryId) {
      axios
        .get(`https://www.kggeniuslabs.com:5000/relatedBlogs/${categoryId}/${id}`)
        .then((res) => {
          setRelatedBlogs(res.data);
        })
        .catch((error) => {
          console.error("Error fetching related blogs:", error);
        });
    }
  }, [categoryId, id]);

  return (
    <div className="container blogpartcontent">
      <div className="row my-3 mx-3">
        <div className="col-sm-12 col-lg-7">
          {/* Check if blog data is loaded before rendering */}
          {blog ? (
            <>
              <h4 className="py-3">
                <b>{blog.title}</b>
              </h4>
              <div className="d-flex justify-content-center">
                <img
                  src={blog.blog_image.replace("\\", "/")}
                  alt={blog.title}
                  className="imsp py-3"
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <h5 className="fw-bold">Conclusion</h5>
              <p>{blog.conclusion}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-sm-0 col-lg-1"></div>
        <div className="col-sm-12 col-lg-4">
          <div>
            <h4 className="my-4">
              <b>Latest Updates</b>
            </h4>
            {/* Render related blogs */}
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/it-blog/${relatedBlog.unique_identifier}`}
                key={relatedBlog.id}
                style={{ textDecoration: "none" }}
              >
                <div className="card shadowcard my-2">
                  <img
                    src={relatedBlog.blog_image.replace("\\", "/")}
                    alt={relatedBlog.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>{relatedBlog.title}</b>
                    </h5>
                    <p className="card-text">
                      {relatedBlog.content
                        .replace(/<[^>]+>/g, "")
                        .substring(0, 100)}
                      ...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogit;
