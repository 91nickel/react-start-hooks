import React, { useRef } from 'react'
import CollapseWrapper from '../common/collapse'

const UseRefExercise = () => {
    const block = useRef()

    const handleTextChange = () => {
        block.current.innerText = 'text'
    }
    const handleSizeChange = () => {
        block.current.style.height = '150px'
        block.current.style.width = '80px'
    }
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: 'white'
                }}
            >
                <small>Блок</small>
            </div>
            <div className="mt-2">
                <button className="btn btn-success me-2" onClick={handleTextChange}>Set text</button>
                <button className="btn btn-success me-2" onClick={handleSizeChange}>Set size</button>
            </div>
        </CollapseWrapper>
    )
}

export default UseRefExercise
