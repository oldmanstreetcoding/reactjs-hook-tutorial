/*
    penggunaan useRef di Hook untuk focus input
*/

import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputref = useRef(null)

    useEffect(() => {
        inputref.current.focus()
    })

    return (
        <div>
            <input type='text' ref={inputref} />
        </div>
    )
}

export default FocusInput
