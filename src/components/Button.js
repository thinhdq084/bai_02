import React from "react";
function Button({ text }) {
  return (
    <button type="button" className="btn btn-success">
      {text}
    </button>
  );
}

export default Button;
