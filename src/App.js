import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className='container'>
      <Header title='To Do List' />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
