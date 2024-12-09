import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./BlogDisplay.css";

function BlogDisplay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, category, content, conclusion, image, isAuthenticated } = location.state; // Data from previous navigation

  const handleUpdateClick = () => {
    navigate('/blog-update', { state: { title, category, content, conclusion, image } });
  };

  return (
    <div className="container-fluix blogviewpart"> 
      <div className='row mx-3 mx-lg-4 my-2'>
        <div className='col-sm-12 col-lg-7 bg-light'>
          <h1 style={{color:"#291571", fontSize:"40px", fontWeight:"700"}} className='text-start my-4'>{title}</h1>
          {image && <img src={image} alt={category} style={{ maxWidth: '100%', height: 'auto' }} accept="jpg,png,jpeg,webp" />}
          <div style={{color:"#291571"}} dangerouslySetInnerHTML={{ __html: content }} />
          <h4>Conclusion</h4>
          <p>{conclusion}</p>
          <button className="btn btn-primary mt-3" onClick={handleUpdateClick}>
              Update
            </button>
          {/* Conditionally render the update button if the user is authenticated */}
          {isAuthenticated && (
            <button className="btn btn-primary mt-3" onClick={handleUpdateClick}>
              Update
            </button>
          )}
        </div>
        <div className='col-sm-0 col-lg-2 '></div>
        <div className='col-sm-12 col-lg-3'>
          <h2 className='mt-5'>Recent Updates</h2>
          <div className="card">
            <img 
              src="https://i.pinimg.com/564x/7c/89/7c/7c897c422767dc202fa355027c3a7889.jpg" 
              className="card-img-top" 
              alt="Card image cap" 
              style={{ height: '150px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
