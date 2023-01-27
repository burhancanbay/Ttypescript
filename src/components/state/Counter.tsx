import { useReducer } from "react";

type CounterStateType = {
  count: number;
};

type UpdateActionType = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetActionType = {
  type: "reset";
};

type CounterActionType = UpdateActionType | ResetActionType;

const initialState = { count: 0 };

function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
