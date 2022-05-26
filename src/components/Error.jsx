import React from "react";

const Error = (props) => (
  <div className="error" role="alert">
    {props.message}
  </div>
);

export default Error;
