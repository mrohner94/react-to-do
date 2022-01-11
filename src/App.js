import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App () {
  const [showAddTask, setShowAddtask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }

    getTasks()

  }, [])

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8080/tasks')
    
    const data = await response.json()
    return data    
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:8080/tasks/${id}`)
    
    const data = await response.json()
    return data    
  }

  const addTask = () => {
    setShowAddtask(!showAddTask)
  }

  const saveTask = async (task) => {

    const response = await fetch('http://localhost:8080/tasks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const newTask = await response.json()
    
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(x => x.id !== id))
  }

  const toggleReminder = async (id) => {
    const toggledTask = await fetchTask(id)
    const updatedTask = {...toggledTask, reminder: !toggledTask.reminder}

    const response = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask),
    })

    const ret = await response.json()


    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: ret.reminder} : task
    ))
  }

  return (
    <div className='container'>
      <Header showAdd={showAddTask} onAdd={addTask} title='To Do List' />
      {showAddTask && <AddTask onAdd={saveTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Do'}
    </div>
  )
}

export default App
