export default function SectionA() {
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
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>4. Type of business</td>
            <td>
              <form>
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
                <br/>
                <input  
                    type="radio"
                    id="pvt-ltd"
                    name="typeOfBusiness"
                    value="pvt-ltd"/>
                <label for="pvt-ltd">Pvt Ltd</label>
                <br/>
                <input  
                    type="radio"
                    id="public-ltd"
                    name="typeOfBusiness"
                    value="public-ltd"/>
                <label for="public-ltd">Public Ltd</label>
                <br/>
                <input  
                    type="radio"
                    id="others"
                    name="typeOfBusiness"
                    value="others"/>
                <label for="others">Others</label>
              </form>
            </td>
          </tr>
          <tr>
            <td>5. CRN Number*:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td className="vr-note">
              <sup>1</sup>The address listed will be used for any physical
              cheque payments or other information that needs to be sent to your
              Company, including the relevant IRS forms.
            </td>
          </tr>
          <tr>
            <td className="vr-note">
              <sup>2</sup>The contacts listed will be authorized to make changes
              to contact information and banking details associated with your
              Prione / Cloudtail account.
            </td>
          </tr>
        </tbody>
      </table>
      <button className="vr-btn">Save &amp; Next</button>
    </>
  );
}
