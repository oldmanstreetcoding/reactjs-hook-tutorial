/*
    penggunaan custom hook pada form input, di sini yang menarik ada variable bind yang merupakan object yang berisi value
    dan method sekaligus pada input form
*/

import React from 'react'
import useInput from '../customhook/useInput'

function AlertInput() {
    
    const [firstName, bindFirstName, resetFirstName]    = useInput('')
    const [lastName, bindLastName, resetLastName]       = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Halo ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" {...bindFirstName} />
                <br/>
                <input type="text" {...bindLastName}/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AlertInput
