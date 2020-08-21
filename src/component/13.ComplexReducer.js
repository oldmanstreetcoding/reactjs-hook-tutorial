/*
   contoh complex reducer, di mana untuk state dan action berupa object, sehingga dapat menampung lebih banyak variabel dan kondisi 
*/

import React, {useReducer} from 'react'

const initialstate = {
    firstCounter    : 0,
    secondCounter   : 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment1':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
        case 'decrement1':
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            }
        case 'reset1':
            return {
                ...state,
                firstCounter: 0
            }
        case 'increment5':
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            }
        case 'decrement5':
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            }
        case 'reset5':
            return {
                ...state,
                secondCounter: 0
            }
        default:
            return state
    }
}

function ComplexReducer() {

    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            <h1>First : {count.firstCounter}</h1>
            <button onClick={() => dispatch({type:'decrement1', value:1})}>decrement 1</button>
            <button onClick={() => dispatch({type:'reset1'})}>reset</button>
            <button onClick={() => dispatch({type:'increment1', value:1})}>increment 1</button>
            <br/><br/>
            <button onClick={() => dispatch({type:'decrement5', value:5})}>decrement 5</button>
            <button onClick={() => dispatch({type:'reset5'})}>reset</button>
            <button onClick={() => dispatch({type:'increment5', value:5})}>increment 5</button>
            <h1>Second : {count.secondCounter}</h1>
            <h1>{JSON.stringify(count)}</h1>
        </div>
    )
}

export default ComplexReducer