import PropTypes from 'prop-types'

const Lists = ({organisme, telephone, link}) => {
    return (
        <li>
            <h3><a href={link} target='_blank' rel="noreferrer">{organisme}</a></h3>
            <p>Téléphone: {telephone} </p>
            
        </li>
    )
}

Lists.defaultProps = {
    telephone: '3949',
}

Lists.propTypes = {
    department: PropTypes.string,
    telephone: PropTypes.string,
}

export default Lists