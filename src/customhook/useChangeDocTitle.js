import {useEffect} from 'react'

function useChangeDocTitle(count) {
    useEffect(() => {
        document.title = `Clicked ${count} Times`
    })
}

export default useChangeDocTitle
