import { useState } from "react";

export function Counter () {
    const [i, setI] = useState(0)


    return <div>
        <h2>Counter</h2>

        <button onClick={() => [setI(i => i + 1)]}>Increment {i}</button>
    </div>
}