import {useState} from 'react'

function useCounter(initialState, incrementValue) {
    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount((prevCount) => prevCount + incrementValue)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - incrementValue)
    }

    const reset = () => {
        setCount(initialState)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
