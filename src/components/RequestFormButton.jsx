import React, { useContext } from "react";
import StylesContext from "./StylesContext";


function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)
  return (
    <div>
      <button>
        Click Here!
      </button>
      <input style= {buttonStyling} type="submit" value="Submit" />

    </div>
  );
}

export default RequestFormButton