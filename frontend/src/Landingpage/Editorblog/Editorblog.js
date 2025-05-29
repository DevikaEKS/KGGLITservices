import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BlogUpdate from "../BlogDisplay/BlogUpdate";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import ClientForm from "../../ClientSection/ClientForm";

function Blogviewed() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
    setBlogs([]);
    if (selectedCategory === "All") {
      axios
        .get(`https://www.kggeniuslabs.com:5000/content/blogs?t=${Date.now()}`)
        .then((res) => {
          // console.log(res.data);

          setBlogs(res.data);
        })
        .catch((err) => console.error("Error fetching blogs:", err));
    } else if (categoryId) {
      axios
        .get(
          `https://www.kggeniuslabs.com:5000/blogs/content/category/${categoryId}?t=${Date.now()}`
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
        case "ERP":
          setCategoryId(5);
          break;
           case "Clients":
          setCategoryId(6);
          break;
      default:
        setCategoryId(null);
        break;
    }
  };

  const handleAddBlogClick = () => {
    navigate(`/dynamic-blog/${id}`);
  };

  const handleupdate = (a) => {
    navigate(`/updateblog/${btoa(a)}/${id}`);
  };

  const getPath = (category_id, blogId) => {    
    switch (category_id) {
      case 1:
        return `/sap-blog/${blogId}`;
      case 2:
        return `/it-blog/${blogId}`;
      case 3:
        return `/digital-marketing-blog/${blogId}`;
        case 5:
        return `/erp-blog/${blogId}`;
        case 6:
          return `/client`;
      default:
        return "/";
    }
  };

  const deleteBlog = (blogId) => {
    axios
      .delete(`https://www.kggeniuslabs.com:5000/blogs/delete/${blogId}`)
      .then((res) => {
        if (res.data.message === "Blog deleted successfully") {
          alert("Blog deleted successfully!");
          setBlogs(blogs.filter((blog) => blog.id !== blogId));
        } else {
          alert(res.data.error || "Error deleting the blog.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting the blog.");
      });
  };

  const togglePublish = (blogId, currentStatus) => {
    axios
      .put(`https://www.kggeniuslabs.com:5000/blogs/togglePublish/${blogId}`)
      .then((res) => {
        if (res.data.success) {
          setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
              blog.id === blogId ? { ...blog, publish: !currentStatus } : blog
            )
          );
        } else {
          alert("Failed to toggle publish status.");
        }
      })
      .catch((err) => {
        console.error("Error toggling publish status:", err);
        alert("Error toggling publish status.");
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center evolheading heading mb-5 text-center">
        <b>Additional Insights</b>
      </h1>

      <div className="row m-4">
        <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
          {["All", "SAP", "IT", "DM","ERP","Clients"].map((category) => (
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
          <button
            className="btn btn-primary col-12 col-md-auto mb-2 mb-md-0"
            onClick={handleAddBlogClick}
          >
            ADD BLOG
          </button>

          <button
            className="btn btn-danger col-12 col-md-auto mb-2 mb-md-0"
            onClick={() => {
              navigate("/");
              //   window.location.assign("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-sm-12 col-lg-4">
            <div className="card shadowcard my-4 position-relative">
              <img
                src={blog.blog_image}
                alt={blog.title}
                className="card-img-top cm1"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>{blog.title}</b>
                </h5>
                <div className="d-flex justify-content-around">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={getPath(blog.category_id, blog.unique_identifier)}
                    className="btn btn-outline-info"
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => handleupdate(blog.id)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="btn btn-outline-info"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {/* Toggle Publish Button */}
              <button
                className={`position-absolute top-0 end-0 btn ${
                  blog.publish ? "btn-success" : "btn-secondary"
                }`}
                style={{ margin: "10px" }}
                onClick={() => togglePublish(blog.id, blog.publish)}
              >
                {blog.publish ? "Published" : "Unpublished"}
              </button>
            </div>
          </div>
        ))}
        
      </div>
      {selectedCategory === "Clients" && (
        <ClientForm/>
      )}

    </div>
  );
}

export default Blogviewed;
