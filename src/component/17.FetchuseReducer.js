/*
    Fetching Data di Hook menggunakan useReducer
*/

import React, { useReducer, useEffect } from 'react'
import Axios from 'axios'

const initialstate = {
    loading : true,
    error   : '',
    post    : {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error   : '',
                post    : action.data
            }
        
        case 'FETCH_ERROR':
            return {
                loading : false,
                error   : 'Soemthing Went Wrong Dude !',
                post    : {}
            }

        default:
            return state
    }
}

function FetchUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type: 'FETCH_SUCCESS', data: res.data})
        })
        .catch(err => {
            dispatch({type:'FETCH_ERROR'})
        })
    })

    return (
        <div>
            {
                state.loading ? 'Loading ...' : state.post.title
            }
            {
                state.error ? state.error : ''
            }
        </div>
    )
}

export default FetchUseReducer
