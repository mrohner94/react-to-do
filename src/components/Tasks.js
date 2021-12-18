import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  )
}

Tasks.propTypes = {
  onDelete: PropTypes.func
}

export default Tasks
