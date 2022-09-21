
import { useMemo, useState } from "react";

function UseMemo () {
    let  [count , setCount] = useState(0);

    const memoVal = useMemo(function (a) {
        return a * 2
    }, [count])

    return (
        <div onClick={() => setCount(++count)}>
            {`change useMemo Val ${memoVal}`}
        </div>
    )
}