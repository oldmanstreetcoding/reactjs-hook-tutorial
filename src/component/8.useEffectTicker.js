/*
    contoh lain penggunaan prameter kedua array kosong [] pada useEffect untuk membuat timer tiap detik
*/

import React, {useState, useEffect} from 'react'

function EffectTicker() {
    const [Count, setCount] = useState(1)

    const tick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        const InterValCount = setInterval(tick, 1000)

        return () => {
            clearInterval(InterValCount)
        }
    }, [])

    return (
        <div>
            <h1>{Count}</h1>
        </div>
    )
}

export default EffectTicker
