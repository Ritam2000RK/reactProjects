import React, { useState } from "react";
import "./App.css";
import MyBtn from "./components/MyBtn";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <MyBtn title={"First Section"} count1={1} count2={2} /> <br />
        <MyBtn title={"Second Section"} count1={3} count2={4} />
      </div>
    </>
  );
}

export default App;