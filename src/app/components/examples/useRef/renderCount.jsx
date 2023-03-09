import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const RenderCountExample = () => {
    const renderCount = useRef(0)
    console.log(renderCount)
    const [otherState, setOtherState] = useState(false)
    useEffect(() => {
        renderCount.current++
        // setRenderCount(prevState => prevState + 1)
    })
    const toggleOtherState = () => {
        setOtherState(!otherState)
    }
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    )
}

export default RenderCountExample
