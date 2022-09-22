import { useMemo } from "react";
import { useReducer } from "react";

export function UseReducer(props) {
  const reducer = (state, action) => {
    console.log(action, state, "action");
    switch (action.type) {
      case "update":
        return {
          ...state,
          loading: false,
        };
      default:
        return { ...state, data: action.data };
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
  console.log("rerender , ");
  const memoState = useMemo(() => state, [state]);
  return (
    <div>
      使用 useReducer Hook
      {JSON.stringify(memoState)}
      <button
        onClick={() => {
          dispatch({ type: "data", data: "hello world" });
        }}
      >
        更新 useReducer 状态
      </button>
    </div>
  );
}
