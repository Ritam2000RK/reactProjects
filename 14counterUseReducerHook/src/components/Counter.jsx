import React, {useReducer} from 'react'

const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset"
};

const initialvalue = {
    value: 0,
    message: ''
};

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREASE:
            if(state.value < 10) {
                return { ...state, value: state.value + 1, message: "" }
            }else{
                return { ...state, message: "This is the limit" }
            }
        case ACTIONS.DECREASE:
            if(state.value > -10) {
                return { ...state, value: state.value - 1, message: "" }
            }else{
                return { ...state, message: "You can't go below that" }
            }
        case ACTIONS.RESET:
            return initialvalue
        default: 
            throw new Error("Something went wrong")
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialvalue)

  return (
    <>
    <h1 className='mb-5'>Counter: {state.value}</h1>
    {state.message && <p>{state.message}</p>}
    <button className='ml-3' onClick={() => dispatch({ type: ACTIONS.INCREASE})}>Increase</button>
    <button className='ml-3' onClick={() => dispatch({ type: ACTIONS.DECREASE})}>Decrease</button>
    <button className='ml-3' onClick={() => dispatch({ type: ACTIONS.RESET})}>Reset</button>
    </>
  )
}

export default Counter