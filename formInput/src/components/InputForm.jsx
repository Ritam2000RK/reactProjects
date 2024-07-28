import { React, useState } from "react";

function InputForm() {
  const [input, setInput] = useState("");

  return (
    <div>
      <form action="">
        <label htmlFor="" className="text-white text-lg ">
          Enter Something
        </label>
        <br></br>
        <input
          type="text"
          placeholder="type something..."
          className="pl-2 mt-2 rounded-md w-80 h-10"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
      </form>
      <div className="text-white border mt-5 min-h-8">
        {input}
      </div>
    </div>
  );
}

export default InputForm;
