/*
    Fetching data di hook menggunakan Axios dan Search By Id
*/

import React, {useState, useEffect} from 'react'
import Axios from 'axios'

/*
    Fetch data By Id Post
*/

function DataFetchId() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtn, setIdFromBtn] = useState(1)

    const handleClick = () => {
        setIdFromBtn(id)
    }

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromBtn])

    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>Fect Data</button>
            <h1 key={post.id}>{post.title}</h1>            
        </div>
    )
}

export default DataFetchId
