export default function SectionA() {
  return (
    <>
      <div className="mb-3"><b>Section A - GENERAL INFORMATION</b></div>
      <td className="vr-note mb-3">Please carefully review related footnote.</td>
      <table>
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
          <td>Address Line 1*</td>
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
        <tr>
          <td>Email Address</td>
          <td>
            <input />
          </td>
        </tr>
      </table>
    </>
  );
}
