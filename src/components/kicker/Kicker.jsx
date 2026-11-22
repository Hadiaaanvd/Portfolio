import React from "react";

const Kicker = ({ index, children }) => (
  <>
    {index && (
      <span className="section-number" aria-hidden="true">
        {index}
      </span>
    )}
    <span className="kicker">
      {index && <span className="kicker__index">{index}</span>}
      {children}
    </span>
  </>
);

export default Kicker;
