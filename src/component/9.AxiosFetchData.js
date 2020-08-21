/*
    Fetching data di hook menggunakan Axios
*/

import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function DataFetch() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                posts.map(post => <h1 key={post.id}>{post.title}</h1>)
            }
        </div>
    )
}

export default DataFetch
