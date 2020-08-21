/*
    penggunaan useRef di Hook untuk akses objek lain di luar useEffect
*/

import React, {useState, useEffect, useRef} from 'react'

function StopTimer() {
    const [timer, setTimer] = useState(0)

    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

    const runTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
    }

    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={() => clearInterval(timerRef.current)}>Stop</button>
            <button onClick={runTimer}>Run </button>
        </div>
    )
}

export default StopTimer
