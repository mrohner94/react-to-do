import PropTypes from 'prop-types'

const Button = ({ color, name, onClick }) => {
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
