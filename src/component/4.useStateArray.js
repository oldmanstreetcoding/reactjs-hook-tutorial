/* 
   useState array juga menggunakan spread operator agar array baru tidak menimpa array lama 
*/

import React, { useState } from 'react'

function HookCounterArray() {
    const [items, setitems] = useState([])

    const addItem = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map((item) => <li key={item.id}>{item.value}</li>)
                }
            </ul>
            <h3>{JSON.stringify(items)}</h3>
        </div>
    )
}

export default HookCounterArray
