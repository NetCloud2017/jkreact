import { useEffect, useState } from "react";

export function UseEffectTest(props) {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(1);
//   useEffect(function () {
//     // react  17 在每次render 之后都会异步执行一次， 但是react  18 引入了一个问题， 在 <react.strictMode> < / react.strictMode> 模式下使用会导致
//     // useEffect 执行两次。

//     // 解决方法 1、 去掉 react.strictMode 模式。 2、 利用 useRef 使用 旗帜法。 利用一个变量先为 true ， 执行一次后为 false .
//     console.log("useEffect func");
//   });

  useEffect(function () {
    console.log("[] useEffect");
  }, []);

//   useEffect(
//     function () {
//       console.log("count useEffect");
//     },
//     [count]
//   );
//   useEffect(
//     function () {
//       console.log("count2  has  change begin setInterval ");
//       let timer = setInterval(() => {
//         console.log("timer");
//       }, 1000);
//       return () => {
//         clearInterval(timer);
//       };
//     },
//     [count2]
//   );
  console.log("render");
  return (
    <div
      onClick={() => {
        console.log(123);
        setCount((pre) => {
          return ++pre;
        });
      }}
      style={{
        width: "100px",
        height: "30px",
        color: "black",
        border: "1px solid #000",
        margin: "10px",
      }}
    >{`useEffect ${count},  useEffect count2 ${count2}`}</div>
  );
}
