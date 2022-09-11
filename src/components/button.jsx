/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

// obj way to create
// const Button = styled.button({
//     color: 'black',
// })

// 模板字符串
// const Button = styled.button`
//   color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};
// `

export const Button = styled.button((props) => ({
  display: "flex",
  width: "40px",
  height: "20px",
  backgroundColor: 'red',
  color: props.primary ? "hatpink" : "turquoise",
  flexDirection: props.column && "column",
}));
