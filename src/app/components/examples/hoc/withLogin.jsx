import React from 'react'
import PropTypes from 'prop-types'
import SmallTitle from '../../common/typografy/smallTitle'

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth')
    return (<>{isLogin ? <Component {...props}/> : <SmallTitle>Auth</SmallTitle>}</>)
}
withLogin.propTypes = {
    name: PropTypes.string
}
export default withLogin
