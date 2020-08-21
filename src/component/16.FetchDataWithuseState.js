/*
    Fetching data di hook menggunakan useState
*/

import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function FetchUseState() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setError('')
            setPost(res.data)
        })
        .catch(err => {
            setLoading(false)
            setError('Ada yang Salah !')
            setPost({})
        })
    })

    return (
        <div>
            {
                loading ? 'Loading ...' : post.title
            }
            {
                error ? error : ''
            }
        </div>
    )
}

export default FetchUseState
