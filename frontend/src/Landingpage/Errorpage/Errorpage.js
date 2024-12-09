import React from 'react';
import "./Errorpage.css";
import { Link } from 'react-router-dom';

function Errorpage() {
  return (
    <div className='container-fluid p-0 m-0'>
      <div className='bgerrorpart text-center text-light'>
        <h2 className='oops-heading'>OOPS</h2>
        <h1 className='error-code'>404</h1>
        <h1>Page Not Found</h1>
        <p>The page you are looking does not exist</p>
        <Link to="/" className="btn btn-light">Go Back</Link>
      </div>
    </div>
  );
}

export default Errorpage;
