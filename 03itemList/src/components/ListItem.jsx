import { React, useState } from "react";

function ListItem() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div>
        <label htmlFor="item">Add Item</label> <br></br>
        <input
          type="text"
          className="border border-black ml-2 rounded-md pl-2"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />{" "}
        <br></br>
        <button
          type="submit"
          className="bg-orange-400 rounded-md mt-2 py-1 px-2 hover:bg-orange-500 hover:scale-105 active:scale-95"
          onClick={() => {
            if(inputValue.trim()) {
                setList(prevList => [...prevList, inputValue])
                setInputValue("")
            }
          }}
        >
          Submit
        </button>
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index} className="border flex items-center p-2 mt-2">
                        <span className="w-8 text-right mr-2 ">{index + 1}. </span>
                        <span className="">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </>
  );
}

export default ListItem;
