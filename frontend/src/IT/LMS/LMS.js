import React from 'react'
import "./LMS.css";
import feat1 from "../Asset/feature1.png";
import feat2 from "../Asset/feature2.png";
import feat3 from "../Asset/feature3.png";
function LMS() {
  return (
    <div className='container lmspart'>
     <h1 className='text-center lmshead my-5'>LMS (Learning Management System)</h1>  
     <p className='lmspara'>Our LMS solutions make training and education simple, effective, and accessible. We create flexible learning platforms that support online courses, certifications, and employee training programs, all tailored to meet your organization's specific needs.</p> 
     <div className='row my-5'>
        <div className='col-sm-12 col-lg-5 brdside text-center'>
            <img src={feat1} alt='Current Challenges in Digital Learning' className='lmsim1'/>
<h1 className='lmsfeatures py-4'>Current Challenges in Digital Learning</h1>
        </div>
        <div className='col-sm-12 col-lg-7'>
            <p className='lmslist'>Fragmented learning tools (video, quizzes, assessments, coding tests).</p>
            <ul className='lmslist'>
                <li>Lack of comprehensive tracking for both learners and instructors.</li>
                <li>Inconsistent user experience across various educational platforms.</li>
                <li>Difficulty in assessing practical coding skills.</li>
            </ul>
        </div>
     </div>

     <div className='row my-5'>
        <div className='col-sm-12 col-lg-7 brdside order-2 order-lg-1'>
       
            <ul className='lmslist'>
                <li>A unified platform for creating courses with video, audio, PDFs, quizzes, and coding tests.</li>
                <li>Sequential content delivery for structured learning.</li>
                <li>Built-in grading system with certification options.</li>
                <li>Learner dashboard for tracking progress, completion percentage, and study patterns.</li>
                <li>Instructor dashboard for course creation and monitoring learner engagement.</li>
                <li>Admin dashboard for demand forecasting, finance monitoring, and performance analytics.</li>
            </ul>
        </div>
        <div className='col-sm-12 col-lg-5 text-center order-1 order-lg-2'>
           <img src={feat2} alt='A Platform Built for Success' className='lmsim1'/>
           <h1 className='lmsfeatures'>A Platform Built for Success</h1>
        </div>
     </div>


     <div className='row my-5'>
        <div className='col-sm-12 col-lg-5 brdside text-center'>  
        <img src={feat3} alt='Features of LMS' className='lmsim1'/>
        <h1  className='lmsfeatures'>Features</h1>
        </div>
        <div className='col-sm-12 col-lg-7 '>
            <h5 className='lmsunord'>Instructor Tools:</h5>
            <ul className='lmslist'>
                <li>Upload multimedia content (videos, PDFs, audio).</li>
                <li>Create quizzes and coding tests using a programmable editor.</li>
                <li>Sequential content release to guide structured learning.</li>
                <li>Automated grading and certification issuance.</li>
            </ul>
          <h5 className='lmsunord'>Learner Experience:</h5>
          <ul className='lmslist'>
            <li>Personalized dashboard showing completed lessons and progress tracking.</li>
            <li>Coding skill testing with real-time feedback.</li>
            <li>Practice quizzes and review sessions to improve understanding.</li>
          </ul>
          <h5 className='lmsunord'>Admin Panel:</h5>
          <ul className='lmslist'>
            <li>Track platform demand and manage user engagement.</li>
            <li>Financial reporting and insights into revenue streams.</li>
          </ul>
        </div>
     </div>

    </div>
  )
}

export default LMS