import React from "react";

const Alert = ({ children, alertType }) => {
  return <div className={`alert alert-${alertType}`}>{children}</div>;
};

export default Alert;
