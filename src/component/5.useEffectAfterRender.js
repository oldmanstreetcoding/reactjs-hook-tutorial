/* 
    penggunaan useEffect di Hooks menggantikan lifecycle component di mount, diupdate dan willmount di class component,
    useEffect ini eksekusi setiap kali stelah halaman di render, untuk conditional render tambahkan parameter kedua pada useEffect
*/

import React, {useState, useEffect} from 'react'

function EffectAfterRender() {
    const [Count, setCount] = useState(0)
    const [Name, setName] = useState('')

    useEffect(() => {
        console.log('UseEffect Update');
        document.title = `Clicked ${Count} Times`
    }, [Count])

    return (
        <div>
            <input type='text' value={Name} onChange={(e) => setName(e.target.value)} />
            <button onClick={()=>setCount((prevCount)=> prevCount+1)}>Clicked {Count} Times</button>
        </div>
    )
}

export default EffectAfterRender
