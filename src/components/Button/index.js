import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            <i className="fa-solid fa-h"></i>
            <i className="fa-solid fa-h"></i>
            <i className="fa-solid fa-k"></i>
        </button>
    )
}

Button.defaultProps = {

}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button