import React, { useReducer } from "react";

const ACTIONS = {
  AGE: "age",
  NAME: "name",
  INCREASE_AGE: "increase_age",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.AGE: {
      return {
        name: state.name,
        age: action.nextAge,
      };
    }
    case ACTIONS.NAME: {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    case ACTIONS.INCREASE_AGE: {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: "", name: "" });

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 bg-gray-900 rounded-md shadow-md">
        <form action="">
          <input
            type="text"
            placeholder="Enter your name"
            value={state.name}
            onChange={(e) => {
              e.preventDefault();
              dispatch({
                type: ACTIONS.NAME,
                nextName: e.target.value,
              });
            }}
            className="w-full p-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:border-blue-400 focus:outline-none"
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter your age"
            value={state.age}
            onChange={(e) => {
              e.preventDefault();
              dispatch({
                type: ACTIONS.AGE,
                nextAge: parseInt(e.target.value, 10),
              });
            }}
            className="w-full p-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:border-blue-400 focus:outline-none mt-4"
          />{" "}
          <br />
        </form>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.INCREASE_AGE });
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Increase age
        </button >
        <p className="mt-4 text-gray-300">
          Hello, {state.name} . Your age is {state.age}
        </p>
      </div>
    </>
  );
}

export default MyComponent;
