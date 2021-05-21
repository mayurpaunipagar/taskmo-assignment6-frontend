import { useState } from "react";
import { Link } from "react-router-dom";

export default function SectionB() {
  const [othersInput, setOthersInput] = useState(false);
  const [othersValue, setOthersValue] = useState("");
  const onChangeRadioValue = (event) => {
    console.log(event.target.value);
    if (event.target.id === "others") {
      setOthersInput(true);
    } else {
      setOthersInput(false);
    }
  };
  const onChangeOfOthersValue = (e) => {
    console.log(e.target.value);
    setOthersValue(e.target.value);
  };

  return (
    <>
    <Link to="/v1/vendor-registration/:id/sectionA"><button className="vr-btn">Back</button></Link>
      <div className="mb-3 textCenter">
        <b>Section B - ENTITY INFORMATION</b>
      </div>
      <div className="vr-note mb-3">
        Please carefully review related footnote.
      </div>
      <div>
        <div className="mb-1">
          <div>1. Are you providing goods or/and services.</div>
          <div className="myRowCenter">
            <input type="checkbox" id="goods" className="mr-2 " />
            <label htmlFor="goods" className="mr-4">
              Goods
            </label>

            <input type="checkbox" id="services" className="mr-2 " />
            <label htmlFor="services">Services</label>
          </div>
        </div>
        <hr />
        <div className="mb-1">
          <div>2. Please share your residential status</div>
          <div className="myRowCenter">
            {" "}
            <input
              type="radio"
              id="resident"
              name="residency"
              value="resident"
              className="mr-2 "
            />
            <label htmlFor="resident" className="mr-4">
              Resident
            </label>
            <br />
            <input
              type="radio"
              id="non-resident"
              name="residency"
              value="non-resident"
              className="mr-2 "
            />
            <label htmlFor="non-resident">Non-Resident</label>
          </div>
        </div>
        <hr />
        <div className="mb-1">
          <div>3. PAN Number*</div>
          <div>
            <input className="vr-input" />
          </div>
        </div>
        <hr />
        <div className="mb-1">
          <div>4. Type of business</div>
          <div className="myColCenter">
            <div onChange={onChangeRadioValue}>
              <input
                type="radio"
                id="individual"
                name="typeOfBusiness"
                value="individual"
              />
              <label htmlFor="individual">Individual</label>
              <br />
              <input
                type="radio"
                id="sole-proprietor"
                name="typeOfBusiness"
                value="non-resident"
              />
              <label htmlFor="sole-proprietor">Sole Proprietor</label>
              <br />
              <input
                type="radio"
                id="partnership-firm"
                name="typeOfBusiness"
                value="partnership-firm"
              />
              <label htmlFor="partnership-firm">Partnership Firm</label>
              <br />
              <input
                type="radio"
                id="pvt-ltd"
                name="typeOfBusiness"
                value="pvt-ltd"
              />
              <label htmlFor="pvt-ltd">Pvt Ltd</label>
              <br />
              <input
                type="radio"
                id="public-ltd"
                name="typeOfBusiness"
                value="public-ltd"
              />
              <label htmlFor="public-ltd">Public Ltd</label>
              <br />
              <input
                type="radio"
                id="others"
                name="typeOfBusiness"
                value="others"
              />
              <label htmlFor="others">Others</label>
            </div>
            <div>
              {othersInput ? (
                <>
                  <input
                    className="vr-input"
                    type="text"
                    name="typeOfBusiness"
                    onChange={onChangeOfOthersValue}
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>5. CRN Number*:</div>
          <div>
            <input className="vr-input" />
          </div>
        </div>
        <hr />
        <div className="mb-1">
          <div>
            6. Mention the type of goods/services which you are providing to
            Taskmo
          </div>
          <div>
            <textarea className="vr-input" />
          </div>
        </div>
        <hr />
        <div className="mb-1">
          <div>
            {" "}
            7. Is your entity registered under{" "}
            <b>
              MSME ACT<sup>3</sup>
            </b>
            <br />
            <span className="vr-note">
              If (Yes) please provide a copy of the MSME registration
              certificate mandatorily
            </span>
            .
          </div>
          <div className="myRowCenter">
            <input type="radio" id="msme-yes" name="msme" value="yes" className="mr-2" />
            <label htmlFor="msme-yes" className="mr-4">Yes</label>
            <br />
            <input type="radio" id="msme-no" name="msme" value="no" className="mr-2" />
            <label htmlFor="msme-no">No</label>
          </div>
        </div>
      </div>
      
      <table>
        <tbody>
          <tr>
            <td className="vr-note">
              <sup>3</sup>The address listed will be used for any physical
              cheque payments or other information that needs to be sent to your
              Company, including the relevant IRS forms.
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/v1/vendor-registration/:id/sectionCD"><button className="vr-btn">Save &amp; Next</button></Link>
    </>
  );
}
