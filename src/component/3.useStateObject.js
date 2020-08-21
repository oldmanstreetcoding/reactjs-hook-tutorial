/* 
    state pada class selalu object, sedangkan pada hooks bebas dan ketika state berupa object cara yang benar useState
    menggunakan spread operator
*/

import React, { useState } from 'react'

function HookCounterObject() {
    const [Name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <input type='text' value={Name.firstName} onChange={(e) => setName({...Name, firstName: e.target.value})}/>
                <input type='text' value={Name.lastName} onChange={(e) => setName({...Name, lastName: e.target.value})}/>
            </form>
            <h1>My First Name is - {Name.firstName}</h1>
            <h1>My Last Name is - {Name.lastName}</h1>
            <h1>{JSON.stringify(Name)}</h1>
        </div>
    )
}

export default HookCounterObject
