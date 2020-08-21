/*
    Cara yang benar mengupdate counter dengan melihat state count sebelum di lakukan penambahan
*/

import React, { useState } from 'react'

function HookCounterPrev() {
    const init = 0
    const [Count, setCount] = useState(init)

    const tambahLima = () => {
        setCount((prevCount) => prevCount + 5)
    }

    return (
        <div>
            Count : {Count}
            <br/>
            <button onClick={()=>setCount(init)}>Reset</button>
            <button onClick={()=>setCount((prevCount) => prevCount+1)}>Tambah</button>
            <button onClick={()=>setCount((prevCount) => prevCount-1)}>Kurang</button>
            <button onClick={tambahLima}>Tambah 5</button>
        </div>
    )
}

export default HookCounterPrev
