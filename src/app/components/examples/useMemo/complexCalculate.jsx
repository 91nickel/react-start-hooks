import React, { useEffect, useState, useMemo } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'

function factoreal (n) {
    return n ? n * factoreal(n - 1) : 1
}

function runFactoreal (n) {
    console.log('run Factoreal', n)
    return factoreal(n)
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100)
    const [otherState, setOtherState] = useState(false)
    const buttonColor = useMemo(() => ({value: otherState ? 'primary' : 'secondary'}), [otherState])

    useEffect(() => {
        console.log('render button color')
    }, [buttonColor])

    const fact = useMemo(() => runFactoreal(value), [value])

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button className="btn btn-primary mx-2" onClick={() => setValue(prev => prev + 10)}>Increment
                </button>
                <button className="btn btn-primary mx-2" onClick={() => setValue(prev => prev - 10)}>Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={`btn btn-${buttonColor.value} mx-2`}
                        onClick={() => setOtherState(prev => !prev)}>Change
                    color
                </button>
            </CardWrapper>
        </>
    )
}

export default ComplexCalculateExample
