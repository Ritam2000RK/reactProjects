import React from "react";
import { useState, useEffect } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [autoSave, setAutoSave] = useState(false);

  const saveData = () => {
    console.log("Saving data", { name, password });
  };

  useEffect(() => {
    let timeoutId;
    if (autoSave) {
      timeoutId = setTimeout(() => {
        saveData();
      }, 10000);
      
      /** 
      console.log("The timeoutId is  ", timeoutId)
      **/

      return () => clearTimeout(timeoutId);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [autoSave, name, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          required
          className="border ml-2 mb-5 p-2 rounded-md border-black"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br></br>
        <label>Password</label>
        <input
          type="password"
          min={4}
          max={15}
          required
          className="border ml-5 mb-5 p-2 rounded-md border-black"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="submit"
          className="border p-2 rounded-md border-violet-600 cursor-pointer mb-5"
        />
        <br />
        <label htmlFor="">Enable Auto Save</label>
        <input
          type="checkbox"
          checked={autoSave}
          onChange={() => setAutoSave(!autoSave)}
          className="ml-2"
        />
      </form>
    </>
  );
}

export default FormComponent;
