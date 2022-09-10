/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Child({ children, fontColor }) {
    console.log(fontColor, 222);
  return (
    <div
      css={css`
        color: ${fontColor};
      `}
    >
      i'm child component
    </div>
  );
}
