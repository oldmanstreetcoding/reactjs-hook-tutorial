/*
    contoh membuat custom hook, ingat bahwa fungsi cutom hook selalu di awal dengan 'use'
    pada custom hook counter ini outputnya return array, sehingga bisa di destructuring array
*/

import React from 'react'
import useCounter from '../customhook/useCounter'

function Counter() {
    
    const [count, increment, decrement, reset] = useCounter(0, 5)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter
