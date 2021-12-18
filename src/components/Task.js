import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}{' '}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
    onDelete: PropTypes.func
}

export default Task
