import React, { useState } from "react";

export default function Alert(props) {
  return (
    <div className="container mt-3">
      <div className="alert alert-success" role="alert">
        {props.value}
      </div>
    </div>
  );
}
