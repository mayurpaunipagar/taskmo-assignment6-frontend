import { useState } from "react";
import SectionD from "./sectionD";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

export default function SectionCD() {
  const [state, setState] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [address, setAddress] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [taxInfo, setTaxInfo] = useState([]);
  const validateInfo = (value) => {
    return !(value === "");
  };

  const submitFunc=()=>{
    swal({
      title: "Are you sure!",
      text: "If you confirm, you won't be able to change anything",
      icon: "warning",
      button: "Confirm",
    });
  }
  return (
    <>
      <Link to="/v1/vendor-registration/:id/sectionB"><button className="vr-btn">Back</button></Link>
      <div className="mb-3">
        <b>Section C - TAX INFORMATION</b>
      </div>
      <div className="add-info-container">
        <div className="vr-input-container">
          <div>State</div>
          <div>
            <input
              type="text"
              placeholder="Enter State"
              onChange={(e) => {
                setState(e.target.value.trim());
              }}
            />
          </div>
        </div>
        <div className="vr-input-container">
          <div>State Code</div>
          <div>
            <input
              type="text"
              placeholder="Enter State Code"
              onChange={(e) => {
                setStateCode(e.target.value.trim());
              }}
            />
          </div>
        </div>
        <div className="vr-input-container">
          <div>Address</div>
          <div>
            <input
              type="text"
              placeholder="Enter Address"
              onChange={(e) => {
                setAddress(e.target.value.trim());
              }}
            />
          </div>
        </div>
        <div className="vr-input-container">
          <div>GSTIN</div>
          <div>
            <input
              type="text"
              placeholder="Enter GSTIN"
              onChange={(e) => {
                setGSTIN(e.target.value.trim());
                console.log(GSTIN);
              }}
            />
          </div>
        </div>
      </div>
      <SectionD/>
      <br />
      <br />
      <button className="vr-btn" onClick={submitFunc}>Submit</button>
    </>
  );
}
