import React from "react";
function Button({displayText, promotionClick}) {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={promotionClick}
    >
      {displayText}
    </button>
  );
}

export default Button;
