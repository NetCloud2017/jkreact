import { useState, useCallback } from "react";

function Child({ name, clickFunc }) {
  console.log("render Child");
  return <div onClick={clickFunc}>usecallback Child {name}</div>;
}
//  useCallback 作用 ：防止函数组件从新渲染时， 父组件传递的 props 函数被从新创建, 进而更新子组件导致性能浪费。 
export function UseCallback() {
  let [name, setName] = useState("A");
  let callback = useCallback(
    function () {
      console.log("to child", name);
      // 原理和 vue 的一样 当为空数组时 只在 渲染前 返回一次函数， 之后不返回，当数组有值的时候， 只有更改时才返回新的函数，不传则每次都返回新的函数。
    },
    [name]
  );

  return (
    <div>
      <button
        onClick={() => {
          setName(name == "A" ? "B" : "A");
        }}
      >
        {" "}
        set name
      </button>
      <Child {...{ clickFunc: callback }} />
    </div>
  );
}
