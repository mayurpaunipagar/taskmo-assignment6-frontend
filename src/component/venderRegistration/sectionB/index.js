import { useState } from "react";

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
      <div className="mb-3">
        <b>Section B - ENTITY INFORMATION</b>
      </div>
      <div className="vr-note mb-3">
        Please carefully review related footnote.
      </div>
      <table>
        <tbody>
          <tr>
            <td>1. Are you providing goods or/and services</td>
            <td>
              <input type="checkbox" id="goods" />
              <label for="goods">Goods</label>
              <br />
              <input type="checkbox" id="services" />
              <label for="services">Services</label>
            </td>
          </tr>
          <tr>
            <td>2. Please share your residential status</td>
            <td>
              <form>
                <input
                  type="radio"
                  id="resident"
                  name="residency"
                  value="resident"
                />
                <label for="resident">Resident</label>
                <br />
                <input
                  type="radio"
                  id="non-resident"
                  name="residency"
                  value="non-resident"
                />
                <label for="non-resident">Non-Resident</label>
              </form>
            </td>
          </tr>
          <tr>
            <td>3. PAN Number*:</td>
            <td>
              <input className="vr-input" type="text" />
            </td>
          </tr>
          <tr>
            <td>4. Type of business</td>
            <td>
              <form>
                <div onChange={onChangeRadioValue}>
                  <input
                    type="radio"
                    id="individual"
                    name="typeOfBusiness"
                    value="individual"
                  />
                  <label for="individual">Individual</label>
                  <br />
                  <input
                    type="radio"
                    id="sole-proprietor"
                    name="typeOfBusiness"
                    value="non-resident"
                  />
                  <label for="sole-proprietor">Sole Proprietor</label>
                  <br />
                  <input
                    type="radio"
                    id="partnership-firm"
                    name="typeOfBusiness"
                    value="partnership-firm"
                  />
                  <label for="partnership-firm">Partnership Firm</label>
                  <br />
                  <input
                    type="radio"
                    id="pvt-ltd"
                    name="typeOfBusiness"
                    value="pvt-ltd"
                  />
                  <label for="pvt-ltd">Pvt Ltd</label>
                  <br />
                  <input
                    type="radio"
                    id="public-ltd"
                    name="typeOfBusiness"
                    value="public-ltd"
                  />
                  <label for="public-ltd">Public Ltd</label>
                  <br />
                  <input
                    type="radio"
                    id="others"
                    name="typeOfBusiness"
                    value="others"
                  />
                  <label for="others">Others</label>
                </div>
                {othersInput ? (
                  <>
                    <input className="vr-input"
                      type="text"
                      name="typeOfBusiness"
                      onChange={onChangeOfOthersValue}
                    />
                  </>
                ) : null}
              </form>
            </td>
          </tr>
          <tr>
            <td>5. CRN Number*:</td>
            <td>
              <input className="vr-input" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              6. Mention the type of goods/services which you are providing to
              Taskmo
            </td>
            <td>
              <textarea type="text" />
            </td>
          </tr>
          <tr>
            <td>
              7. Is your entity registered under <b>MSME ACT<sup>3</sup></b>.
              <br/>
              <span className="vr-note">If (Yes) please
              provide a copy of the MSME registration certificate mandatorily</span>
            </td>
            <td>
            <form>
                <input
                  type="radio"
                  id="msme-yes"
                  name="msme"
                  value="yes"
                />
                <label for="msme-yes">Yes</label>
                <br />
                <input
                  type="radio"
                  id="msme-no"
                  name="msme"
                  value="no"
                />
                <label for="msme-no">No</label>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

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
      <button className="vr-btn">Save &amp; Next</button>
    </>
  );
}
