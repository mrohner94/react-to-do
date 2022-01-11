import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

Tasks.propTypes = {
  onDelete: PropTypes.func
}

export default Tasks
