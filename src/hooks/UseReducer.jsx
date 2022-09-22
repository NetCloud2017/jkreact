import { useReducer } from "react";

export function UseReducer(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };

  // 或者干脆
  //   const reducer = (state, newState) => {
  //     return { ...state, ...newState };
  //   };
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    something: "",
  });
  // 触发
  dispatch({ loading: false });
  return (
    <div>
      {JSON.stringify(state)}
      <button
        onClick={() => {
          dispatch({ data: "hello world" });
        }}
      ></button>
    </div>
  );
}
