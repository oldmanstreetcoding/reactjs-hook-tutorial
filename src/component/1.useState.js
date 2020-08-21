/*
    Penggunaan useState pada Hooks menggantikan setState pada class component
*/

import React, { useState } from 'react'

function HookCounter() {
    const [Count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(Count+1)}>Clicked {Count} Times</button>
        </div>
    )
}

export default HookCounter
