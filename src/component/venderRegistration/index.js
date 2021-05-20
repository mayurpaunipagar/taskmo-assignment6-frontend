import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { VENDOR_REGISTRATION_URL } from "../../config";
import SectionA from "./sectionA";
import SectionB from "./sectionB";
import SectionCD from "./sectionCD";
import "./style.css";
import VrHeader from "./vrHeader";
export default function VendorRegistration() {
  const [loading, setLoading] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const params = useParams();
  const submitFunc = () => {
    const submitObj = {
      input1,
      input2,
    };
    const fetchFunc = async () => {
      setLoading(true);
      const res1 = await fetch(`${VENDOR_REGISTRATION_URL}/${params.id}`, {
        method: "POST",
        body: JSON.stringify({
          input1,
          input2,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res2 = await res1.json();
      console.log(res2);
      setLoading(false);
    };
    fetchFunc();
  };
  return (
    <>
      <div className="vr-container">
        <div className="vr-header">
          <VrHeader />
        </div>

        {loading ? (
          <>
            <Spinner animation="grow" />
          </>
        ) : (
          <>
            <div className="vr-card">
              <SectionA />
              {/* <SectionB/>
              <SectionCD/> */}
            </div>

            {/* <input
              type="text"
              placeholder="INPUT 1"
              onChange={(e) => {
                setInput1(e.target.value.trim());
              }}
            />
            <input
              type="text"
              placeholder="INPUT 2"
              onChange={(e) => {
                setInput2(e.target.value.trim());
              }}
            />
            <button onClick={submitFunc}>Submit</button> */}
          </>
        )}
      </div>{" "}
    </>
  );
}
