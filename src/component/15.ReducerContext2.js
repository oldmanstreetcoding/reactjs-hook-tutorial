import React, { useContext } from 'react'
import { CountContext } from './15.ReducerContext'

function ComponentA() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h1>{countContext.countState}</h1>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
        </div>
    )
}

export default ComponentA
