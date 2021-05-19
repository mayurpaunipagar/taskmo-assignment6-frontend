import "./style.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import EmailSent from "../emailSent";

export default function AddLead() {
  const formData = [
    "Name",
    "Email",
    "Gender",
    "Contact Number",
    "Whatsapp",
    "Full Address",
    "Area",
    "City",
    "State",
    "Pincode",
    // "Contact",
    // "Whatsapp",
    // "Job Role",
    // "State",
    // "City",
    // "Pincode",
  ];
  const [newFormData, setNewFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [emailSent,setEmailSent]=useState(false);

  const setData = (event) => {
    const inputName = event.target.name;
    switch (inputName) {
      case formData[0]:
        newFormData.name = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[1]:
        newFormData.email = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[2]:
        newFormData.gender = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[3]:
        const cn = event.target.value;
        if (validateNumber(cn)) {
          newFormData.contact_number = Number(cn);
        } else {
          console.log("contact number error");
        }
        break;
      case formData[4]:
        const wn = event.target.value;
        if (validateNumber(wn)) {
          newFormData.whatsapp = Number(wn);
        } else {
          console.log("whatsapp number error");
        }
        break;
      case formData[5]:
        newFormData.full_address = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[6]:
        newFormData.area = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[7]:
        newFormData.city = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[8]:
        newFormData.state = event.target.value;
        setNewFormData({ ...newFormData });
        break;
      case formData[9]:
        const pinc=event.target.value.trim();
        if(Number(pinc) && pinc.length===6){
          newFormData.pincode = pinc;
        setNewFormData({ ...newFormData });
        }else{
          console.log("pincode error");
        }
        break;
    }
    console.log(newFormData);
  };

  const addLead = async () => {
    setLoading(true);
    const res1 = await fetch("http://localhost:8080/v1/leads/create-lead", {
      method: "POST",
      body: JSON.stringify({
        lead: { ...newFormData },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const res = await res1.json();
    console.log("response : ", res);
    setLoading(false);
    if(res.id){
      setEmailSent(true);
    }else{
      setEmailSent(false);
    }
    
  };

  const clearData = () => {
    setNewFormData({});
  };

  const validateNumber = (num) => {
    const temp = Number(num);
    return num.trim().length === 10 && temp;
  };
  return (
    <>
      {loading ? (
        <>
          <Spinner animation="grow" />
        </>
      ) : (
        emailSent?<><EmailSent/></>:<div className="new-profile-container">
        <div className="my-new-profile">
          <div className="my-new-profile-form-container">
            {/* <div>
              <div className="new-profile-text">Add New Profile </div>
              <img
                className="my-new-profile-img"
                src={window.location.origin + "/images/add-employe-image.svg"}
                alt="profile icon"
              />
            </div> */}
            <div className="my-form">
              {formData.map((el) => {
                if (el==="select"
                  // el === "Gender" ||
                  // el === "Job Role" ||
                  // el === "State" ||
                  // el === "City"
                ) {
                  return (
                    <>
                      <label className="profile-input-label">{el}</label>
                      <select
                        className="profile-input-field gray"
                        // type="text"
                        // placeholder="Eg. your text here"
                      >
                        <option value="Eg. your text here">
                          Eg. your text here
                        </option>
                      </select>
                    </>
                  );
                } else {
                  return (
                    <>
                      <label className="profile-input-label">{el}</label>
                      <input
                        className="profile-input-field"
                        type="text"
                        placeholder="Eg. your text here"
                        name={el}
                        onChange={setData}
                      />
                    </>
                  );
                }
              })}
              <div className="profile-button-container">
                <button
                  className="profile-btn-add btn-style"
                  onClick={addLead}
                >
                  ADD
                </button>
                <button
                  className="profile-btn-clear btn-style"
                  onClick={clearData}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
