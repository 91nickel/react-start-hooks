import React, { useCallback, useEffect, useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)

    const handleChange = ({target}) => {
        setData(prev => ({...prev, [target.name]: target.value}))
    }
    // without Callback
    const validateWithoutCallback = (data) => {
        console.log('validateWithoutCallback', data)
    }
    useEffect(() => {
        withoutCallback.current++
    }, [validateWithoutCallback])

    // with Callback
    const validateWithCallback = useCallback((data) => {
        console.log('validateWithCallback', data)
    }, [])
    useEffect(() => {
        withCallback.current++
    }, [validateWithCallback])

    useEffect(() => {
        validateWithoutCallback(data)
        validateWithCallback(data)
    }, [data])

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider/>
            <p>Render without callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={data.email || ''}
                onChange={handleChange}
            />
        </CardWrapper>
    )
}

export default UseCallBackExample
