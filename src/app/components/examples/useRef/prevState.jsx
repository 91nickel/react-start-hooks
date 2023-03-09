import React, { useEffect, useRef, useState } from 'react'
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from '../../common/divider'

const PrevStateExample = () => {
    const prevState = useRef("")
    console.log(prevState)
    const [otherState, setOtherState] = useState("false")
    useEffect(() => {
        prevState.current = otherState
        // prevState.current++
    }, [otherState])
    const toggleOtherState = () => {
        setOtherState(prevState => prevState === 'false' ? 'true' : 'false')
    }
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Prev state: {prevState.current}</p>
            <p>Current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    )
};

export default PrevStateExample;
