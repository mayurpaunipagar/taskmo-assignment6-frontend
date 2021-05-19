export default function SectionA() {
  return (
    <>
      <div className="mb-3">
        <b>Section A - GENERAL INFORMATION</b>
      </div>
      <td className="vr-note mb-3">
        Please carefully review related footnote.
      </td>
      <table className="mb-3">
        <tr>
          <th colSpan={2}>Business Information</th>
        </tr>
        <tr>
          <td>Company / Remit to Name*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            Address<sup>1</sup>*
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Address Line 2</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Address Line 3</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Address Line 4</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>City*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>State*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Postal Code*</td>
          <input />
        </tr>
        <tr>
          <td>Country*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Phone Number*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Fax Number</td>
          <td>
            <input />
          </td>
        </tr>
        <tr >
          <td>Email Address</td>
          <td>
            <input />
          </td>
        </tr>
      
      
        <tr className="mt-">
          <th colSpan={2}>
            Contact Information<sup>2</sup>
          </th>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Contact Name*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Phone Number*</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Fax Number</td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>Email Address*</td>
          <td>
            <input />
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td className="vr-note">
            <sup>1</sup>The address listed will be used for any physical cheque
            payments or other information that needs to be sent to your Company,
            including the relevant IRS forms.
          </td>
        </tr>
        <tr>
          <td className="vr-note">
            <sup>2</sup>The contacts listed will be authorized to make changes
            to contact information and banking details associated with your
            Prione / Cloudtail account.
          </td>
        </tr>
      </table>
      <button className="vr-btn">Save &amp; Next</button>
    </>
  );
}
