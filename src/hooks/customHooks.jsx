import { useState, useCallback, useEffect } from "react";

export function useWindowSize() {
  let [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const getWindowSize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [getWindowSize]);

  return [size];
}

export function TestCustomHook() {
  let [size] = useWindowSize();
  return (
    <div>{`window size: width: ${size.width}, height: ${size.height}`}</div>
  );
}
