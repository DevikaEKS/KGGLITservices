import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

function Blogupdation() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [category, setCategory] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [blogImage, setBlogImage] = useState(null); // For image file input
  const [imagePath, setImagePath] = useState(""); // For displaying existing image
  const { id, userid } = useParams();
  const decodedId = atob(id);

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.kggeniuslabs.com:5000/update/getblogs/${decodedId}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setShortTitle(res.data.unique_identifier)
        setContent(res.data.content);
        setCategory(res.data.category_id); // Assuming category_id corresponds to the select options
        setConclusion(res.data.conclusion);
        setImagePath(res.data.blog_image); // Set the image path
      })
      .catch((err) => console.error(err));
  }, [decodedId]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle form submission
    const formData = new FormData();
    formData.append("category_id", category);
    formData.append("title", title);
    formData.append("stitle", shortTitle);
    formData.append("content", content);
    formData.append("conclusion", conclusion);

    // Append the image file if it exists
    if (blogImage) {
      formData.append("image", blogImage);
    }

    // Send a PUT request to update the blog post
    axios
      .put(`https://www.kggeniuslabs.com:5000/blogs/update/${decodedId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Blog updated successfully") {
          alert("Blog updated successfully!");
          nav(`/blogeditor/${userid}`);
        } else if (res.data.error === "Blog not found or no changes made") {
          alert("Blog not found or no changes made");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error updating the blog.");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group row mt-5 mb-2">
          <label className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select className="form-control form-control1" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="1">SAP</option>
              <option value="2">IT Services</option>
              <option value="3">Digital Marketing</option>
            </select>
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">Blog Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">Blog Short Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={shortTitle}
              onChange={(e) => setShortTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">Blog Image</label>
          <div className="col-sm-10">
            {imagePath && (
              <img
                src={imagePath}
                alt="Blog"
                style={{ maxWidth: "100%", marginBottom: "10px" }}/>
            )}
            <input
              type="file"
              accept="image/*"
              className="form-control form-control1"
              onChange={(e) => setBlogImage(e.target.files[0])}
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
              placeholder="Write your blog content here..."/>
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">Conclusion</label>
          <div className="col-sm-10">
            <textarea
              className="form-control form-control1"
              rows="3"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}></textarea>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Blogupdation;
