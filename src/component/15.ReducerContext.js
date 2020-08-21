/*
    contoh ini menunjukkan kalo reducer dapat di share, taruh reducer di top level component dan parsing reducer dengan bantuan context
*/

import React, {useReducer} from 'react'
import ComponentA from './15.ReducerContext2'

export const CountContext = React.createContext()

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

function ReducerContext() {

    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div>
                <h1>{count}</h1>
                <ComponentA />
            </div>
        </CountContext.Provider>
    )
}

export default ReducerContext
