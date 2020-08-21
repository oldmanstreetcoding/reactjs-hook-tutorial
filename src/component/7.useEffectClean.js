import React, {useState} from 'react'
import EffectOnce from './6.useEffectOnce'

function EffectClean() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {
                display && <EffectOnce />
            }
        </div>
    )
}

export default EffectClean
