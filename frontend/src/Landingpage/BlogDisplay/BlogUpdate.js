import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Include React Quill styles

function BlogUpdate() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const { title, category, content, conclusion, image } = location.state; // Get blog data from state

  const [updatedTitle, setUpdatedTitle] = useState(title); // State for updated title
  const [updatedCategory, setUpdatedCategory] = useState(category); // State for updated category
  const [updatedContent, setUpdatedContent] = useState(content);
  const [updatedConclusion, setUpdatedConclusion] = useState(conclusion);

  const handleSave = () => {
    // Create an object for the updated blog
    const updatedBlog = {
      title: updatedTitle,
      category: updatedCategory,
      content: updatedContent,
      conclusion: updatedConclusion,
      image: image // Assuming the image stays the same
    };

    // Navigate to the BlogDisplay page and pass the updated blog
    navigate('/bl', { state: updatedBlog });
  };

  return (
    <div className="container-fluid blogviewpart"> 
      <div className='row mx-3 mx-lg-4 my-2'>
        <div className='col-sm-12 col-lg-7 bg-light'>
          {/* Dropdown for updating category */}
          <h4>Update Category</h4>
          <select 
            value={updatedCategory} 
            onChange={(e) => setUpdatedCategory(e.target.value)} 
            style={{ width: '100%', fontSize: '20px', marginBottom: '20px' }}
          >
            <option value="SAP">SAP</option>
            <option value="IT">IT Services</option>
            <option value="DM">Digital Marketing</option>
            <option value="Other">Other</option>
            {/* Add more options as needed */}
          </select>

          {/* Input box for updating title */}
          <h4>Update Title</h4>
          <input 
            type="text"
            className='form-control form-control1' 
            value={updatedTitle} 
            onChange={(e) => setUpdatedTitle(e.target.value)} 
            style={{ width: '100%', fontSize: '20px', marginBottom: '20px' }} 
            placeholder="Enter new title" 
          />

          {image && <img src={image} alt={category} style={{ maxWidth: '100%', height: 'auto' }} />}

          <h4>Update Content</h4>
          <ReactQuill value={updatedContent} onChange={setUpdatedContent} />

          <h4>Update Conclusion</h4>
          <textarea 
            value={updatedConclusion} 
            onChange={(e) => setUpdatedConclusion(e.target.value)} 
            style={{ width: '100%', height: '100px', fontSize: '16px', marginBottom: '20px' }} 
            placeholder="Enter conclusion here..."
          />

          <button className="btn btn-success mt-3" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default BlogUpdate;
