// 使用memo后，子组件的props或者state没有变化时，将不会对子组件进行渲染
import { useState, memo } from "react";
// 父组件
export const MemoWrap = () => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    console.log('memo')
    setCount(count + 1);
  };
  return (
    <>
      <div onClick={addCount}>计数: {count}</div>
      <Child />
    </>
  );
};

// 子组件
const Child = memo(() => {
  console.log("child start---");
  return <div>child...</div>;
});

