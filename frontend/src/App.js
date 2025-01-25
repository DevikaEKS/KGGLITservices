import "./App.css";
import Insights from "./Landingpage/Insights/Insights";
import Aboutus from "./Landingpage/Aboutus/Aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credentials from "./Landingpage/Credentials/Credentials";
import Menubar from "./Landingpage/Menubar/Menubar";
import Footer from "./Landingpage/Footer/Footer";
import Footercard from "./Landingpage/Footercard/Footercard";
import AboutKggl from "./Aboutsection/AboutKggl/AboutKggl";
import Mission from "./Aboutsection/Mission/Mission";
import Banner from "./Landingpage/Banner/Banner";
import Ourservices from "./Landingpage/Ourservices/Ourservices";
import Whygeniuslabs from "./Aboutsection/Whygeniuslabs/Whygeniuslabs";
import Teamfeatures from "./HRRecruitment/Teamfeatures/Teamfeatures";
import Bannerhr from "./HRRecruitment/Recruitment/Bannerhr/Bannerhr";
import Aboutpagehr from "./HRRecruitment/Recruitment/Aboutpage/Aboutpage";
import Sectors from "./HRRecruitment/Recruitment/Sectors/Sectors";
import Clientpage from "./HRRecruitment/Recruitment/Clientpage/Clientpage";
import Corevalues from "./HRRecruitment/Recruitment/Corevalues/Corevalues";
import { Evolution } from "./Aboutsection/Evolution/Evolution";
import Discover from "./HRRecruitment/Discover/Discover";
import Sapbanner from "./Sap/Sapbanner/Sapbanner";
import Sapimplementation from "./Sap/Sapimplementation/Sapimplementation";
import Hanacloud from "./Sap/Hanacloud/Hanacloud";
import Methodology from "./Sap/Methodology/Methodology";
import Greenfield from "./Sap/Greenfield/Greenfield";
import Newimplement from "./Sap/Newimplement/Newimplement";
import Contactpage from "./Landingpage/Contactpage/Contactpage";
import Contactsap from "./Sap/Contactsap/Contactsap";
import Hrfooter from "./HRRecruitment/Hrfooter/Hrfooter";
import Footerabout from "./Aboutsection/Footerabout/Footerabout";
import DMBanner from "./DigitalMarketing/DMBanner";
import Dmservice from "./DigitalMarketing/Dmservice/Dmservice";
import Adoptdm from "./DigitalMarketing/Adoptdm/Adoptdm";
import Dmcontact from "./DigitalMarketing/Dmcontact/Dmcontact";
import Footerdm from "./DigitalMarketing/Footerdm/Footerdm";
import Sapmenubar from "./Sap/Sapmenubar/Sapmenubar";
import Menubardm from "./DigitalMarketing/Menubardm/Menubardm";
import Hrmenubar from "./HRRecruitment/Hrmenubar/Hrmenubar";
import BannerIT from "./IT/BannerIT/BannerIT";
import Itfooter from "./IT/ITFooter/Itfooter";
import Dmblogview from "./DigitalMarketing/DMblogview/Dmblogview";
import Dmblog from "./DigitalMarketing/Dmblog/Dmblog";
import Sapblogview from "./Sap/Sapblogview/Sapblogview";
import Contactpages from "./Landingpage/Contactpages/Contactpages";
import Blogviewed from "./Landingpage/Blogviewed/Blogviewed";
import Blogit from "./IT/Blogit/Blogit";
import Autopopup from "./Landingpage/Autopopup/Autopopup";
import CRM from "./IT/CRM/CRM";
import LMS from "./IT/LMS/LMS";
import Demobook from "./IT/Demobook/Demobook";
import Techstack from "./IT/Techstack/Techstack";
import Contactformit from "./IT/Contactformit/Contactformit";
import Crmdemobook from "./IT/Demobook/Crmdemobook";
import CRMSolutions from "./IT/CRMSolutions/CRMSolutions";
import ITMenubar from "./IT/ITMenubar/ITMenubar";
import Dynamicblog from "./Landingpage/Dynamicblog/Dynamicblog";
import Errorpage from "./Landingpage/Errorpage/Errorpage";
import Loginpage from "./Landingpage/Loginpage/Loginpage";
// import BlogDisplay from "./Landingpage/BlogDisplay/BlogDisplay";
import BlogUpdate from "./Landingpage/BlogDisplay/BlogUpdate";
import EditorBlog from "./Landingpage/Editorblog/Editorblog";
import Blogupdation from "./Landingpage/Blogupdation/Blogupdation";
import Footerblog from "./Landingpage/Footerblog/Footerblog";
import Contactfooter from "./Landingpage/Contactfooter/Contactfooter";
import Newsletter from "./Landingpage/Newsletter/Newsletter";
import Webinarbanner from "./Webinarpage/Webinarbanner/Webinarbanner";
import Webinarcontact from "./Webinarpage/Webinarcontact/Webinarcontact";
import Webinarpart from "./Webinarpage/Webinarpart/Webinarpart";
import Webinarfooter from "./Webinarpage/Webinarfooter/Webinarfooter";
import Salesdatacategory from "./Salesdata/Salesdatacategory";
import Salesmenu from "./Salesdata/Salesmenu/Salesmenu";
import Webpart from "./Landingpage/Webpart/Webpart";
import Erpmenubar from "./Erp/Erpmenubar/Erpmenubar";
import Erpfooter from "./Erp/Erpfooter/Erpfooter";
import Verticals from "./Erp/Verticals/Verticals";
import Erpbanner from "./Erp/Erpbanner/Erpbanner";
import Erprequirements from "./Erp/Erprequirements/Erprequirements";
import Softwarepart from "./Erp/Softwarepart/Softwarepart";
import Businesserp from "./Erp/Businesserp/Businesserp";
import Erppro from "./Erp/Erppro/Erppro";
import Featureserp from "./Erp/Featureserp/Featureserp";
import Additionalfeatures from "./Erp/Additionalfeatures/Additionalfeatures";
import Benefitsoferp from "./Erp/Benefitsoferp/Benefitsoferp";
import Erpblock from "./Erp/Erpblock/Erpblock";
import Erpcontact from "./Erp/Erpcontact/Erpcontact";
import { RedirectToExternal } from "./Landingpage/RedirectToExternal/RedirectToExternal";
import Erpblogview from "./Erp/Erpblogview/Erpblogview";
import ERPInsights from "./Erp/ERPInsights/ERPInsights";
import Dmcertificate from "./DigitalMarketing/DMLandingpage/Dmcertificate/Dmcertificate";
import Dmabout from "./DigitalMarketing/DMLandingpage/Dmabout/Dmabout";
import Whydm from "./DigitalMarketing/DMLandingpage/Whydm/Whydm";
import Bannerdm from "./DigitalMarketing/DMLandingpage/Bannerdm/Bannerdm";
import Topperformance from "./DigitalMarketing/DMLandingpage/Topperformance/Topperformance";
import DMLandingcontact from "./DigitalMarketing/DMLandingpage/DMLandingcontact/DMLandingcontact";
import DMServices from "./DigitalMarketing/DMLandingpage/DMServices/DMServices";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Menubar />,
              <Banner />,
              <Aboutus />,
              <Ourservices />,
              <Credentials />,
              <Newsletter/>,
              <Insights />,
              <Contactpages />,
              <Footercard />,
              <Footer />,
              <Autopopup />
            ]}
          />
          <Route
            path="/aboutus"
            element={[
              <Menubar />,
              <AboutKggl />,
              <Evolution />,
              <Mission />,
              <Whygeniuslabs />,
              <Footercard />,
              <Footerabout />,
            ]}
          />
          <Route
            path="/hr-consultancy"
            element={[
              <Hrmenubar />,
              <Bannerhr />,
              <Aboutpagehr />,
              <Teamfeatures />,
              <Sectors />,
              <Clientpage />,
              <Corevalues />,
              <Discover />,
              <Footercard />,
              <Hrfooter />,
              <Autopopup />
            ]}
          />
          <Route
            path="/blog"
            element={[<Menubar />, <Blogviewed />, <Footercard />, <Footerblog/>]}
          />
          <Route
            path="/implementation"
            element={[
              <Sapimplementation />,
              <Hanacloud />,
              <Methodology />,
              <Greenfield />,
              <Newimplement />,
              <Contactsap />
            ]}
          />
          <Route
            path="/contact"
            element={[<Menubar />, <Contactpage />, <Footercard />, <Contactfooter/>]}
          />
          <Route
            path="/sap-services"
            element={[<Sapmenubar />, <Sapbanner />, <Autopopup />]}
          />
          <Route
            path="/it-services"
            element={[<ITMenubar />, <BannerIT />, <Autopopup />]}
          />
          <Route
            path="/digital-marketing-services"
            element={[
              <Menubardm />,
              <DMBanner />,
              <Dmservice />,
              <Adoptdm />,
              <Dmblog />,
              <Dmcontact />,
              <Footercard />,
              <Footerdm />,
              <Autopopup />
            ]}
          />
          <Route path="/digital-marketing-blog/:id" element={[<Menubar />,<Dmblogview />,<Footercard />,<Footerblog/>]} />
          <Route path="/sap-blog/:id" element={[<Menubar />,<Sapblogview />,<Footercard />,<Footerblog/>]} />
          <Route
            path="/it-blog/:id"
            element={[<Menubar />, <Blogit />, <Footercard />, <Footerblog/>]}
          />
          <Route path="/erp-blog/:id" element={[<Menubar />, <Erpblogview/>, <Footercard />, <Footerblog/>]}/>
          <Route
            path="/crm"
            element={[
              <CRM />,
              <CRMSolutions />,
              <Crmdemobook />,
              <Techstack />,
              <Contactformit />,
              <Footercard />,
              <Itfooter />
            ]}
          />
          <Route
            path="/lms"
            element={[
              <LMS />,
              <Demobook />,
              <Techstack />,
              <Contactformit />,
              <Footercard />,
              <Itfooter />
            ]}/>
          <Route path="/genius-login" element={<Loginpage />} />
          <Route path="/dynamic-blog/:id" element={<Dynamicblog />} />
          <Route path="/blog-update" element={<BlogUpdate />} />
          <Route path="/blogeditor/:id" element={<EditorBlog/>}/>
          <Route path="/updateblog/:id/:userid" element={<Blogupdation/>}/>
          <Route path="*" element={<Errorpage />} />
          <Route path="/event" element={[<Webinarbanner/>,<Webinarpart/>,<Webinarcontact/>,<Footercard />,<Webinarfooter/>]}/>
          <Route path="/sales/:userid" element={[<Salesmenu/>,<Salesdatacategory/>]}/>
          <Route path="/custom-erp-software-solution" element={[<Erpmenubar/>,<Erpbanner/>,<Erprequirements/>,<Verticals/>,<Erppro/>,<Featureserp/>,<Additionalfeatures/>,<Benefitsoferp/>,<Businesserp/>,<ERPInsights/>,<Erpcontact/>,<Footercard />,<Erpfooter/>,<Autopopup/>]}/>
          <Route path="/erp" element={<RedirectToExternal/>}/>
          <Route path="/dm" element={[
              <Menubardm />,
              <Bannerdm />,
              <Dmabout/>,
              <Dmcertificate/>,
              <DMServices/>,
              <Topperformance/>,
              <Whydm/>,
              <DMLandingcontact/>,
              <Footercard />,
              <Footerdm />,
              <Autopopup />
            ]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
   