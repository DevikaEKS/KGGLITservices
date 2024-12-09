import React, { useEffect, useState } from "react";
import "./Dmblogview.css";
import dmblogim from "../Asset/seoi.jpeg";
import Footercard from "../../Landingpage/Footercard/Footercard";
import Footer from "../../Landingpage/Footer/Footer";
import Menubar from "../../Landingpage/Menubar/Menubar";
import dmblg2 from "../Asset/image3.png";
import dmblg3 from "../Asset/Businessman.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Dmblogview() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

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

  const validateURL = (inputURL) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(inputURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateURL(url)) {
      setError("Please enter a valid URL");
      return;
    }
    setError("");

    axios
      .post(`https://www.kggeniuslabs.com:5000/add-url`, { url })
      .then((res) => {
        console.log(res);
        if (res.data.message === "URL inserted successfully") {
          alert("Submitted Successfully");
          setUrl("");
        } else {
          alert("Failed to insert URL");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid blogpartcontent m-0 p-0">
      <div className="row my-3 mx-3">
        <div className="col-sm-12 col-lg-7">
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
          <div className="card p-4 shadowcard">
            <h4 className="rqtxt py-3">Free SEO Audit</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="url"
                id="companywebsite"
                className="form-control form-control1"
                name="companyWebsite"
                placeholder="Enter Website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <br />
              <div>
                <input
                  type="email"
                  className="form-control form-control1"
                  placeholder="Enter your email"
                />
              </div>
              <input
                type="submit"
                className="subbtnclr rounded-2"
                value="Submit"
              />
            </form>
          </div>

          <div>
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/digital-marketing-blog/${relatedBlog.unique_identifier}`}
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

export default Dmblogview;
