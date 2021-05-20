import { useState } from "react";

export default function SectionD() {
  const [neftInput, setNeftInput] = useState(false);
  const onChangeRadioValue = (event) => {
    console.log(event.target.value);
    if (event.target.id === "neft") {
      setNeftInput(true);
    } else {
      setNeftInput(false);
    }
  };
  return (
    <>
      <div className="mt-3 mb-3">
        <b>Section D - PAYMENT METHOD</b>
      </div>
      <div className="pay-info-container">
          <div className="myColCenter"></div>
        <div className="vr-input-container" onChange={onChangeRadioValue}>
          <form className="vr-pay-form">
            <input
              type="radio"
              id="neft"
              name="paymentMethod"
              value="neft"
              className="mr-3"
            />
            <label for="neft">NEFT</label>
            <br />
            <input
              type="radio"
              id="cheque"
              name="paymentMethod"
              value="cheque"
              className="mr-3"
            />
            <label for="cheque">Physical cheque</label>
          </form>
        </div>
        <br/>
        <div className="pay-info-container">
        {neftInput ? (
          <>
            
              <div>
                (NEFT) National Electronic Funds Transfer
              </div>
              <div className="vr-note">
                Note: requires a bank account in the country
              </div>
          </>
        ) : null}
        </div>
      </div>
    </>
  );
}
