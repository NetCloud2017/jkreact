/** @jsxImportSource @emotion/react */
import { css, Global, keyframes } from "@emotion/react";
import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Child } from "./child";
import { Button } from "./components/button";


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
const rounding = keyframes`
0% {
	transform: translate(10px,10px)
}
25% {
	transform: translate(90px, 10px);
}
50% {
	transform: translate(90px, 90px);
}
75% {
	transform: translate( 10px, 90px);
}
100% {
	transform: translate(10px, 10px);
}
`;

function App() {
  let [fontColor, setColorState] = useState("red");
  return (
    <div>
      <div
        css={css`
          width: 500px;
          height: 500px;
          background-color: aliceblue;
          display: flex;
          justify-content: flex-start;
          flex-flow: row wrap;
          & > div {
            margin: 0 5px;
          }
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
        <div css={divStyle}></div>
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
          <Child
            css={css`
              font-weight: 600;
            `}
            fontColor={fontColor}
          />
        </div>
        <Global
          styles={css`
            .globalFont {
              font-size: 20px;
              color: black;
              word-spacing: 2px;
              border: 1px solid #000;
            }
          `}
        />
        <div className="globalFont"> use global font style</div>
      </div>
      <div
        css={css`
          width: 100px;
          height: 100px;
          background-color: black;
          margin-left: 10px;
        `}
      >
        <div
          css={css`
            width: 5px;
            height: 5px;
            border-radius: 50%;
            animation: ${rounding} 4s ease infinite;
            background-color: white;
          `}
        ></div>

        <Button primary />
      </div>
    </div>
  );
}
export default App;
