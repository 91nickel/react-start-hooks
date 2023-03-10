import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'
import CardWrapper from '../common/Card'

const SimpleComponent = ({onLogin, onLogout, isAuth}) => {
    return (
        <>
            {!isAuth
                ? <button className="btn btn-primary m-2" onClick={onLogin}>Войти</button>
                : <button className="btn btn-primary m-2" onClick={onLogout}>Выйти</button>
            }
        </>
    )
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
}

const withFunctions = Component => {
    return (props) => {
        const isAuth = !!localStorage.getItem('token')
        const onLogin = () => {
            // console.log('onLogin()', localStorage.getItem('token'))
            localStorage.setItem('token', 'hello')
            window.location.reload()
        }
        const onLogout = () => {
            // console.log('onLogout()', localStorage.getItem('token'))
            localStorage.removeItem('token')
            window.location.reload()
        }
        return (
            <CardWrapper>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogout={onLogout}
                />
            </CardWrapper>
        )
    }
}

const HocExercise = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent)
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{' '}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    В <code>props</code> принимает параметры:{' '}
                    <code>onLogin</code>, <code>onLogOut</code>,{' '}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображает кнопку &quot;Войти&quot;, если пользователь НЕ
                    авторизован (зависит от параметра <code>isAuth</code> в{' '}
                    <code>props</code>)
                </li>
                <li>
                    Отображает кнопку с содержанием &quot;Выйти из
                    системы&quot;, если пользователь авторизован (зависит от
                    параметра <code>isAuth</code> в <code>props</code>)
                </li>
                <li>
                    При нажатии на &quot;Войти&quot;, вызывается функция{' '}
                    <code>onLogin</code>, а при нажатии на &quot;Выйти из
                    системы&quot; вызывается <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо создать HOC с названием{' '}
                <code>withFunctions</code>, который будет принимать компонент{' '}
                <code>SimpleComponent</code> и делать следующее:
            </p>
            <ul>
                <li>
                    Добавит обертку на компонент в виде карточки boostrap
                    (компонент <code>components/common/Card.jsx</code>)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>. Этот параметр
                    является обычной переменной <code>const</code> в функции{' '}
                    <code>withFunctions</code> и содержит в себе результат
                    проверки наличия данных в <code>localStorage</code> по ключу{' '}
                    <code>auth</code>. На текущий момент нам не важно, какие
                    данные там хранить (например можно проверять наличие строки{' '}
                    <code>&quot;token&quot;</code>)
                </li>
                <li>
                    Передает параметры <code>onLogin</code> и{' '}
                    <code>onLogOut</code>. Функции также находятся в{' '}
                    <code>withFunctions</code>. <br/>
                    <code>onLogin</code> - добавляет <code>auth</code> в{' '}
                    <code>localStorage</code> с любым значением (например строку{' '}
                    <code>&quot;token&quot;</code>) <br/>
                    <code>onLogOut</code> - удаляет <code>auth</code> из{' '}
                    <code>localStorage</code>
                </li>
            </ul>
            <p>
                Через <code>withFunctions</code> необходимо создать новый
                компонент <code>ComponentWithHoc</code> следующим образом:
                <br/>
                <code>
                    const ComponentWithHoc = withFunctions(SimpleComponent);
                </code>
                <br/>
                Затем его необходимо просто вывести в шаблон
            </p>
            <p>
                Примечание: при вызове <code>onLogin</code> или{' '}
                <code>onLogOut</code> кнопка в компоненте{' '}
                <code>SimpleComponent</code> обновится после перезагрузки
                страницы
            </p>
            <ComponentWithHoc />
        </CollapseWrapper>
    )
}

export default HocExercise
