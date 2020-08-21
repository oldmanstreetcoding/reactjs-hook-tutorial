/*
    Terlihat betapa simple nya menggunakan variabel context dari hook yang di set di top level app.js
*/

import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

function HookContext() {

    const user      = useContext(UserContext)
    const channel   = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default HookContext
