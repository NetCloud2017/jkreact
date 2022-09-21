import { useState } from "react";
import { MemoWrap } from "./Memo";
import { UseEffectTest } from "./UseEffect";
import { UseCallback } from "./UseCallback";
export function HooksTest() {
  let [showEffect, setShowEffect] = useState(true);
  return (
    <>
      {/* <MemoWrap /> */}

      {/* useEffect */}
      {/* <button onClick={() => setShowEffect(!showEffect)}>
        trigger useEffect 测试组件
      </button>
      {showEffect && <UseEffectTest />} */}

      {/* use CallBack */}
      <UseCallback />
    </>
  );
}
