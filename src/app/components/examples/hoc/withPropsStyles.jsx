import React from 'react'
import PropTypes from 'prop-types'
import CardWrapper from '../../common/Card'

const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="new name" />
        </CardWrapper>
    )
}
withPropsStyles.propTypes = {
    name: PropTypes.string
}
export default withPropsStyles
