import PropTypes from 'prop-types'

function Button ({ name, onClick, color }) {
  return (
    <button
      className='btn'
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  )
}

Button.defaultProps = {
  color: 'gray'
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string
}

export default Button
