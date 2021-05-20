export default function SectionA() {
  return (
    <>
      <div className="mb-3 textCenter">
        <b>Section A - GENERAL INFORMATION</b>
      </div>
      <div className="vr-note mb-3">
        Please carefully review related footnote.
      </div>
      <div className="mb-2">
        <b>Business Information</b>
      </div>
      <div className="mb-1">
        <div>Company / Remit to Name*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Address<sup>1</sup>*</div>
        <div><input/></div>
      </div>
      <div className="mb-1">
        <div>Address Line 2</div>
        <div><input/></div>
      </div>
      <div className="mb-1">
        <div>Address Line 3</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Address Line 4</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>City*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>State*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Postal Code*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Country*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Phone Number*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Fax Number</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Email Address</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mt-3 mb-3 textCenter">
        <b>Contact Information<sup>2</sup></b>
      </div>
      <div className="mb-1">
        <div>Title</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Contact Name*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Phone Number*</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Fax Number</div>
        <div>
          <input />
        </div>
      </div>
      <div className="mb-1">
        <div>Email Address*</div>
        <div>
          <input />
        </div>
      </div>

      
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
