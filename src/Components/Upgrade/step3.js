import React from "react";

function Step3({ startAtRight }) {
  return (
    <div className={startAtRight ? "step step3" : "step step3 startAtRight"}>
      <h4>Upgrade to business</h4>
      <ul className="list-unstyled font-s mt-4">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/2000px-White_check.svg.png"
        className="check mt-4 mb-2"
        hidden
      />
      <div className="font-s" hidden>
        Outbound flight upgraded
      </div>
    </div>
  );
}

export default Step3;
