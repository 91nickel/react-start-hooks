import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'
import Divider from '../common/divider'

const ListWrapper = ({children}) => {
    console.log('Hello', children)
    return (
        <>
            <ul className="list-group mb-3">
                {
                    React.Children.map(children, (child, index) => {
                        return (
                            <li className="list-group-item d-flex">{index + 1}&nbsp;{child}</li>
                        )
                    })
                }
            </ul>
            <Divider />
            <p>Либо так, если конечно задание допускает залезание руками в компонент списка</p>
            <ul className="list-group mb-3">
                {
                    React.Children.map(children, (child, index) => {
                        return <li className="list-group-item">
                            {React.cloneElement(child, {...child.props, number: index + 1})}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

ListWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{' '}
                <code>React.Children.map</code> так и{' '}
                <code>React.Children.toArray</code>
            </p>
            <ListWrapper>
                <Component/>
                <Component/>
                <Component/>
            </ListWrapper>
        </CollapseWrapper>
    )
}

const Component = ({number}) => {
    return <div>Компонент списка {number || ''}</div>
}

Component.propTypes = {
    number: PropTypes.number
}

export default ChildrenExercise
