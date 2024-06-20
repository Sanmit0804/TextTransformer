import React from "react";

function Alert(props) {

  return (
    props.alert && (
      <div className="container mt-3">
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
