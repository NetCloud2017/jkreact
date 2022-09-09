/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import logo from "./logo.svg";
// import "./App-css-in.js";
//  样式复用： 
const divStyle = css`
	width: 150px;
	height:  150px;
	background-color: blue;
`
const divStyle2 = css`
	font-size: 18px;
	font-weight: 550;
	color: black;
`
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
		<div css={divStyle}> </div>
		{/* 样式组合  */}
		<div css={css`
			${divStyle}
			&:hover {
				background-color: yellow;
			}
		`}></div>
		<div css={[divStyle, divStyle2]}>hello world</div>
		<div></div>
    </div>
  );
}
export default App;
