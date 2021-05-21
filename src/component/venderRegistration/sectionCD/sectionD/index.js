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
        <div className="myColCenter textCenter mb-3">
          How you
          would like to be paid for product sales and/or services performed
        </div>
        <div className="vr-input-container" onChange={onChangeRadioValue}>
          <form className="vr-pay-form">
            <input
              type="radio"
              id="neft"
              name="paymentMethod"
              value="neft"
              className="mr-3"
            />
            <label htmlFor="neft">NEFT</label>
            <br />
            <input
              type="radio"
              id="cheque"
              name="paymentMethod"
              value="cheque"
              className="mr-3"
            />
            <label htmlFor="cheque">Physical cheque</label>
          </form>
        </div>
        <br />
        <div className="pay-info-container myColCenter">
          {neftInput ? (
            <>
              <div>(NEFT) National Electronic Funds Transfer</div>
              <div className="vr-note textCenter mb-3">
                Note: Requires a bank account in the country. you will receive payment to your bank account electronically.
              </div>
              <div>
                <div>Bank Name</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>Bank Address</div>
                <div  className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>Bank Code</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>Name on Account</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>Account Number</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>IFSC Code</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>MICR Code</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
              <div>
                <div>Account Type</div>
                <div className="mb-2"><input type="text"/></div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
