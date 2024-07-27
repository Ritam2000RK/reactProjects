import { useState } from "react";
import "./App.css";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const [backgroundChange, setBackgroundChange] = useState("green");

  return (
    <>
      {/* <div className="border-solid border-2 border-sky-500 p-5 m-5 mt-40">
        <h4
          className="border-solid border-2 border-green-600 p-1 "
          style={{ color: backgroundChange }}
        >
          This is React with Ritam
        </h4>
        <button onClick={() => {setBackgroundChange(backgroundChange === "green" ? "red" : "green")}}>hello</button>
      </div> */}
    
      <ToggleBtn onText="Enabled" offText="Disabled" onColor="green" offColor="red" />
      
    </>
  );
}

export default App;
