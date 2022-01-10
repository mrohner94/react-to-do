import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App () {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Dec 5th at 2:30pm',
      reminder: false
    },
    {
      id: 2,
      text: 'Christmas Gifts',
      day: 'Dec 25th at 10:30am',
      reminder: true
    },
    {
      id: 3,
      text: 'Office Shopping',
      day: 'Dec 28th at 6:30pm',
      reminder: false
    },
    {
      id: 4,
      text: 'Dinner with Friends',
      day: 'Feb 2nd at 7:45pm',
      reminder: true
    }
  ])

  const addTask = task => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(x => x.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className='container'>
      <Header title='To Do List' />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Do'}
    </div>
  )
}

export default App
