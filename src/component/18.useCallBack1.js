/*
    contoh penggunaan useCallBack + memo untuk optimalisasi rendering component,
    component hanya akan di render jika ada perubahan di suatu komponen, sedangkan komponen yang tidak berubah tidak akan di render
    useCallBack dipanggil setiap eksekusi function
*/

import React, {useState, useCallback} from 'react'
import Title from './18.useCallBack2'
import Count from './18.useCallBack3'
import Button from './18.useCallBack4'

function ParentCallBack() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentCallBack
