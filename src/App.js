/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import logo from "./logo.svg";
// import "./App-css-in.js";

function App() {
  return (
    <div css={
		css`
			width: 500px;
			height: 500px;
			background-color: aliceblue;
			display: flex;
			justify-content:space-between;
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
		`
	}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
    </div>
  );
}

export default App;
