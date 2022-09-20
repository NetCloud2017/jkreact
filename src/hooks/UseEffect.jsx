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

  //   useEffect(function () {
  // 	// 在render 执行之后执行， 18 react 之前执行一次 ， 18之后执行 两次。
  //     console.log("[] useEffect");
  //   }, []);

    useEffect(
      function () {
  		// 以18 react strictMode 下 为例： 初始 render 后执行 2次 ， 之后当count 更改render 后执行一次。
        console.log("count useEffect");
      },
      [count, count2]
    );

  //   useEffect(
  //     function () {
  //       console.log("count2  has  change begin setInterval ");
  // 	  // 情况同上。
  //       let timer = setInterval(() => {
  //         console.log("timer");
  //       }, 1000);
  //       return () => {
  // 		//  在 strict mode 下render后执行一次， 在 非 strict mode下 render 后不执行。 当该组件卸载后执行一次。
  // 		console.log('clear timer');
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
		setCount2(count2 +  1)
      }}
      style={{
        // width: "100px",
        display: "inline-block",
        padding: "5px",
        height: "30px",
        color: "black",
        border: "1px solid #000",
        margin: "10px",
      }}
    >{`useEffect ${count},  useEffect count2 ${count2}`}</div>
  );
}

// 面试题 答案 3

// export function UseEffectTest(props) {
//   let [count, setState] = useState(0);

//   useEffect(function () {
//     setState(1);
//   });
//   console.log("render"); // 打印多少次
//   return <div> 123 {count}</div>;
// }
