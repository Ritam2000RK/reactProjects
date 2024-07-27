import React from "react";
import { useState } from "react";

function ToggleBtn({ onText, offText, onColor, offColor }) {
  const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {
  //     setToggle(!toggle)
  // }

  const buttonStyle = {
    backgroundColor: toggle ? onColor : offColor,
  };

  return (
    <button
      onClick={() => {
        setToggle(!toggle);
        // if(toggle) {
        //     const h1 = document.createElement('h1');
        //     h1.textContent = "Welcome the process is enabled"
        //     document.body.appendChild(h1);
        // }else{
            
        // }
      }}
      style={buttonStyle}
    >
      {toggle ? onText : offText}
    </button>
  );
}

export default ToggleBtn;
