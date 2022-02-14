import React from "react";

const Input = ({ errorMessage, ...props }) => {
  return (
    <div className="input-text">
      <input {...props} />
      <br />
      {errorMessage && <span className="errorMessage text-danger">{errorMessage}</span>}
    </div>
  )

}

export default Input;