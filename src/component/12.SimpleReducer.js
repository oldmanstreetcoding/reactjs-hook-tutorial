/*
    langkah penggunaan useReducer di Hook sebagai state management
    1. import useReducer
    2. const [count, dispatch] = useReducer(reducer, initialstate)
    3. buat variabel initialstate
    4. buat function reducer bisa di luar function
    5. gunakan variabel count dengan conditional pada dispatch
*/

import React, {useReducer} from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate
        default:
            return state
    }
}

function SimpleReducer() {

    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <button onClick={() => dispatch('increment')}>increment</button>
        </div>
    )
}

export default SimpleReducer
