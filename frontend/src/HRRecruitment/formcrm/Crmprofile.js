import React, { useState } from 'react';

function Crmprofile() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [emailid, setEmailId] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [countryRegion, setCountryRegion] = useState('');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [associatedCompany, setAssociatedCompany] = useState('');
  const [alternativephno,setAlternativePhno]=useState('');
  const [alternativeemail,setAlternativeEmail]=useState('');

  return (
    <div>
      <form>
        <div className='container-fluid'>
            <div className='row mt-5'>
          <div className='col-sm-12 col-md-6 col-lg-4'>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">First Name</label>
              <input type="text" className="form-control" name="first_name" id="firstname" value={firstname} onChange={(change) => { setFirstName(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Last Name</label>
              <input type="text" className="form-control" name="last_name" id="lastname" value={lastname} onChange={(change) => { setLastName(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Email Id</label>
              <input type="text" className="form-control" name="emailid" id="emailid" value={emailid} onChange={(change) => { setEmailId(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Alternative Email ID</label>
              <input type="text" className="form-control" name="alternative_email" id="alternative_email" value={alternativeemail} onChange={(change) => { setAlternativeEmail(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Phone Number</label>
              <input type="text" className="form-control" name="phone_number" id="phone_number" value={phonenumber} onChange={(change) => { setPhoneNumber(change.target.value) }} />
            </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Alternative Phone Number</label>
              <input type="text" className="form-control" name="alternative_phno" id="alternative_phno" value={alternativephno} onChange={(change) => { setAlternativePhno(change.target.value) }} />
            </div>
            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Company Name</label>
              <input type="text" className="form-control" name="company_name" id="company_name" value={companyName} onChange={(change) => { setCompanyName(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Country Region</label>
              <input type="text" className="form-control" name="country_region" id="country_region" value={countryRegion} onChange={(change) => { setCountryRegion(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">City</label>
              <input type="text" className="form-control" name="city" id="city" value={city} onChange={(change) => { setCity(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Industry</label>
              <input type="text" className="form-control" name="industry" id="industry" value={industry} onChange={(change) => { setIndustry(change.target.value) }} />
            </div>

           
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Mobile Phone Number</label>
              <input type="text" className="form-control" name="mobile_phone_number" id="mobile_phone_number" value={mobilePhoneNumber} onChange={(change) => { setMobilePhoneNumber(change.target.value) }} />
            </div>
            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Job Title</label>
              <input type="text" className="form-control" name="job_title" id="job_title" value={jobTitle} onChange={(change) => { setJobTitle(change.target.value) }} />
            </div>
            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Person LinkedIn Profile</label>
              <input type="text" className="form-control" name="linkedin_profile" id="linkedin_profile" value={linkedinProfile} onChange={(change) => { setLinkedinProfile(change.target.value) }} />
            </div>

            <div className="form-group mb-2">
              <label className="form-control-label  font-weight-bold">Associated Company</label>
              <input type="text" className="form-control" name="associated_company" id="associated_company" value={associatedCompany} onChange={(change) => { setAssociatedCompany(change.target.value) }} />
            </div>

           


           
            </div>
          </div>
          <div className='text-center my-4'>
          <input type='submit' className='btn btn-primary btn-sm' value='Submit' />
          </div>
          </div>
      </form>
    </div>
  )
}

export default Crmprofile;
