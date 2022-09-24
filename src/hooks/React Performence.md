1、 react 为什么需要性能优化?

由于 react 会从新创建 一个新的 dom 树， 需要和旧的 dom 树 逐个遍历。 这样有些不变的也会进行比较那样 会浪费性能。

2、 性能优化的准则是什么？

将变的部分和不变的部分分离， 即将 和 context, props , state 相关的代码和不变的分离。

```jsx

import React, {useState, useEffect, ReactNode， }from'react';

export default function App(){
    return (
        <>
            <InputWrapper>
            <ExpensiveCpn />
            </InputWrapper>
        </>
    )
}

function InputWrapper({children}:{children: ReactNode}){
    // 变的部分
    const [num, updateNum] = useState(0);
    return (
        <div title={num + ''}>
            <input value={num} onChange={(e)=> updateNum(+e.target.value)}/>
            <p>num is {num}</p>
            {children}
        </div>
    )
}

function ExpensiveCpn() {
    Let now = performance.now();
    while (performance.now() - now < 100) {}
    console.log('耗时的组件 render');
    return <p>耗时的组件</p>;
}

```

3、 怎么判断 props , state, context 这三者不变呢？ 前面的代码分离可以做到新能优化
为啥 还需要 新能优化 API 呢？

```jsx
import React, { useState, useContext, useMemo } from "react";

const numCtx = React.createContext < number > 0;
const updateNumCtx =
  React.createContext < React.Dispatch < number >> (() => {});

function Button() {
  // 不变的
  const updateNum = useContext(updateNumCtx);
  // 解析这里为什么每次都打印了。

  console.log("btn render");
  return <button onClick={() => updateNum(Math.random())}>产生随机数</button>;
}

function Show() {
  //变的
  const num = useContext(numCtx);
  return <p>num is: {num}</p>;
}



const Middle = () => {
  // 不变的
  return (
    <>
      <Button />
      <Show />
    </>
  );
}

// 优化后 memo 在浅比较。 props 进行浅比较
// const Middle = React.memo(() => {
//   // 不变的 
//   return (
//     <>
//       <Button />
//       <Show />
//     </>
//   );
// });


// useMemo 优化后
// const Middle = () => {
//   // 不变的
//   return useMemo(
//     () =>{
//         return (
//             <>
//               <Button />
//               <Show />
//             </>
//         )
//     }
//   );
// })

export default function App() {
  const [num, updateNum] = useState(0);
  // 变的部分
  return (
    <numCtx.Provider value={num}>
      <updateNumCtx.Provider value={updateNum}>
        <Middle />
      </updateNumCtx.Provider>
    </numCtx.Provider>
  );
}

/*

该如何比较props?
全等比较一一高效，但不易命中
浅比较一—不高效，但易命中

react 默认是进行全等比较。 Module 的props 其实是一个对象， 而新的props 是一个新对
象因此 对比时认为是更新了， 所以它要从新 render

*/
```


4、性能优化步骤

    1.寻找项目中的性能损耗严重的子树
    2.在子树的根节点使用性能优化API
    3.子树中运用变与不变分离原则

