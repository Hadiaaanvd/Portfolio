import React from "react";

const Kicker = ({ index, children }) => (
  <span className="kicker">
    {index && <span className="kicker__index">{index}</span>}
    {children}
  </span>
);

export default Kicker;
