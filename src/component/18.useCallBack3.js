/*
    component child count pada contoh useCallBack
*/

import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)