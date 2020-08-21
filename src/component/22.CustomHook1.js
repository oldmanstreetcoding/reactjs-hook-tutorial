/*
    contoh penggunaan customHook untuk merubah document title
*/

import React, {useState} from 'react'
import useChangeDocTitle from '../customhook/useChangeDocTitle'

function DocTitle() {
    const [count, setCount] = useState(0)

    useChangeDocTitle(count)

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} Times</button>
        </div>
    )
}

export default DocTitle
