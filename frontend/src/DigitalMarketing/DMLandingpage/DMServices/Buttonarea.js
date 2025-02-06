import React, { useState} from "react";
import ContactModal from "../Bannerdm/ContactModal";

function Buttonarea() {
const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="container d-flex justify-content-center py-5">
      <div className="expertAdvice p-3 rounded-2 d-flex flex-column justify-content-center align-items-center">
  <h3 className="text-center txtclr1">Don't Let Your Competitors Win Online</h3>
  <h3 className="text-center txtclr1">Elevate Your Brand with KG Genius Labs Digital Marketing!</h3>
  <button className="contactdmbtn py-3 px-4 rounded-5" onClick={() => setModalShow(true)} >
    Get Expert Advice
  </button>
  
  <ContactModal show={modalShow} handleClose={() => setModalShow(false)} />
</div>

      </div>

    </>
  );
}

export default Buttonarea;
