/*
    mirip dengan useCallBack, useMemo digunakan untuk optimasi rendering component,
    pada kasus ini hanya function yang terimbas (counterSatu) yang mengalami perlambatan karena ada fungsi gangguan while (i < 2000000000) i++
    sedangkan fungsi incrementDua tidak mengalami perlambatan karena tidak melibatkan counterDua
*/

import React, {useState, useMemo} from 'react'

function UseMemo() {
    const [counterSatu, setCounterSatu] = useState(0)
    const [counterDua, setCounterDua] = useState(0)

    const incrementSatu = () => {
        setCounterSatu(counterSatu + 1)
    }

    const incrementDua = () => {
        setCounterDua(counterDua + 1)
    }

    const isEven = useMemo(() => {
        // fungsi tambahan untuk memperlambat proses click
        let i = 0
        while (i < 2000000000) i++
        return counterSatu%2===0
    }, [counterSatu])

    return (
        <div>
            {
                isEven ? 'even' : 'odd'
            }
            <br/>
            <button onClick={incrementSatu}>Counter1 Clicked {counterSatu} Times</button>
            <br/><br/>
            <button onClick={incrementDua}>Counter2 Clicked {counterDua} Times</button>
        </div>
    )
}

export default UseMemo
