/*
    pada contoh ini useEffect hanya dipanggil sekali ketika pertama kalo, dengan menggunakan [] pada variabel kedua useEffct,
    maka yang di log hanya mouse event saja, setiap ada pergerakan mouse, karena jika tidak maka useEffect akan dipanggil terus
*/

import React, {useState, useEffect} from 'react'

function EffectOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('use efect called');
        window.addEventListener('mousemove', logMousePosition)

        // component willunmount di hooks
        return () => {
            console.log('component unmount');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            X - {x} : Y - {y}
        </div>
    )
}

export default EffectOnce
