import React, { useReducer } from "react";

const ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease",
  RESET: "reset",
};

const initialvalue = {
  value: 0,
  message: "",
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREASE:
      const newValueIncrease = state.value + 1;
      if (newValueIncrease <= 10) {
        return { 
            ...state, 
            value: newValueIncrease, 
            message: "",
            history: [...state.history, `Increased to ${newValueIncrease}`]
        };
      } else {
        return { 
            ...state, 
            message: "This is the limit",
            history: [...state.history, `Attempted to increase beyond limit`]
        };
      }
    case ACTIONS.DECREASE:
            if (state.value > -10) {
                return { 
                    ...state, 
                    value: state.value - 1, 
                    message: "", 
                    history: [...state.history, `Decreased to ${state.value - 1}`]
                };
            } else {
                return { 
                    ...state, 
                    message: "You can't go below that", 
                    history: [...state.history, `Attempted to decrease beyond limit`]
                };
            }
    case ACTIONS.RESET:
      return {
        ...initialvalue,
        history: [...state.history, 'Reset to 0']
      }
    default:
      throw new Error("Something went wrong");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialvalue);

  return (
    <>
      <h1 className="mb-5">Counter: {state.value}</h1>
      {state.message && <p>{state.message}</p>}
      <button
        className="ml-3"
        onClick={() => dispatch({ type: ACTIONS.INCREASE })}
      >
        Increase
      </button>
      <button
        className="ml-3"
        onClick={() => dispatch({ type: ACTIONS.DECREASE })}
      >
        Decrease
      </button>
      <button
        className="ml-3"
        onClick={() => dispatch({ type: ACTIONS.RESET })}
      >
        Reset
      </button>
      <h2 className="mt-5">Action HIstory:</h2>
      <ul>
        {state.history.map((entry, index) => (
            <li key={index}>{entry}</li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
