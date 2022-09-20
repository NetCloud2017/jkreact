import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { EmotionTest } from "./emotionjs";
import { UseEffectTest } from "./hooks/UseEffect";
function App() {
  let [showEffect, setShowEffect] = useState(true);
  return (
    <div>
      <EmotionTest />
      {/* useEffect */}
      <button onClick={() => setShowEffect(!showEffect)}>
      
        trigger useEffect 测试组件
      </button>
      {showEffect && <UseEffectTest />}
    </div>
  );
}
export default App;
