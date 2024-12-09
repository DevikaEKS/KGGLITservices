import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import "./Dynamicblog.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dynamicblog() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [conclusion, setConclusion] = useState("");
  const [title, setTitle] = useState(""); // State for blog title
  const [shortTitle, setShortTitle] = useState("");
  const [image, setImage] = useState(null); // State for image
  const navigate = useNavigate();
  const { id } = useParams();

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  useEffect(() => {
    axios
      .get("https://www.kggeniuslabs.com:5000/blog_categories")
      .then((res) => {
        setCategories(res.data); // Store categories in state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryId", category);
    formData.append("title", title);
    formData.append("stitle", shortTitle);
    formData.append("content", content);
    formData.append("conclusion", conclusion);
    if (image) {
      formData.append("image", image);
    }

    console.log(formData);

    axios
      .post("https://www.kggeniuslabs.com:5000/add-blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Blog added successfully!") {
          toast.success("Blog added successfully!"); // Show success message
          navigate(`/blogeditor/${id}`);
          // Clear all fields
          setCategory("");
          setTitle("");
          setShortTitle("");
          setImage(null);
          setContent("");
          setConclusion("");
        } else {
          toast.error("Try again later."); // Show error message
        }
      })
      .catch((error) => {
        console.error("Error submitting blog:", error);
        toast.error("Error submitting blog."); // Show error message
      });
  };

  return (
    <div className="container bgblogs">
      <div className="row mx-1 mx-md-4">
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mt-5 mb-2 row form-group">
              <label className="col-sm-2">Category</label>
              <div className="col-sm-10">
                <select
                  className="form-select form-control1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                Blog Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Blog Short Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                Blog Short Title 
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the blog Short title"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="form-group my-3 row ">
              <label htmlFor="imageUpload" className="col-sm-2">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <label className="col-sm-2">Blog Content</label>
              <div className="col-sm-10">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className="form-control1 rounded-2"
                  placeholder="Write your blog content here..."
                />
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="conclusion" className="col-sm-2 col-form-label">
                Blog Conclusion
              </label>
              <div className="col-sm-10">
                <textarea
                  id="conclusion"
                  className="form-control form-control1"
                  rows="3"
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  placeholder="Write your blog conclusion here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Dynamicblog;
