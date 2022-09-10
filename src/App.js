/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Child } from "./child";
//  样式复用：
const divStyle = css`
  width: 150px;
  height: 150px;
  background-color: blue;
`;
const divStyle2 = css`
  font-size: 18px;
  font-weight: 550;
  color: black;
`;

function App() {
  let [fontColor, setColorState] = useState("red");
  return (
    <div
      css={css`
        width: 500px;
        height: 500px;
        background-color: aliceblue;
        display: flex;
        justify-content: space-between;
        /* flex-flow: column nowrap; */

        /* 嵌套子样式*/
        & > div:nth-of-type(1) {
          width: 50px;
          height: 50px;
          background-color: red;
        }
        & > div:nth-of-type(2) {
          width: 100px;
          height: 100px;
          background-color: green;
        }
      `}
    >
      <div></div>
      <div></div>
      <div css={divStyle}> </div>
      {/* 样式组合  */}
      <div
        css={css`
          ${divStyle}
          &:hover {
            background-color: yellow;
          }
        `}
      ></div>
      <div
        onMouseEnter={() => {
			console.log(123);
          setColorState("green");
        }}
        onMouseLeave={() => {
          setColorState("red");
        }}
        className="text"
        css={[divStyle, divStyle2]}
      >
        hello world
        <Child fontColor={fontColor} />
      </div>
      <div></div>
    </div>
  );
}
export default App;
