import { useMemo, useState, useCallback, memo } from "react";

const Child = ({ name, onClick }) => {
  console.log("子组件?");
  return (
    <>
      <div style={{ color: name.color }}>
        我是一个子组件，父级传过来的数据：{name.name}
      </div>
      <button onClick={onClick.bind(null, "新的子组件name")}>改变name</button>
    </>
  );
};
const ChildMemo = memo(Child);

export const UseMemo = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Child组件");

  return (
    <>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        加1
      </button>
      <p>count:{count}</p>
      <ChildMemo
        //使用useMemo，返回一个和原本一样的对象，第二个参数是依赖性，当name发生改变的时候，才产生一个新的对象
        //  作用 和 useCallback 类似。 
        name={useMemo(
          () => ({
            name,
            color: name.indexOf("name") !== -1 ? "red" : "green",
          }),
          [name]
        )}
        onClick={useCallback((newName) => setName(newName), [])}
        /* useCallback((newName: string) => setName(newName),[]) */
        // 这里使用了useCallback优化了传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数
      />
    </>
  );
};
