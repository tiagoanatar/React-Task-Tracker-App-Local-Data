//import logo from './logo.svg'
//import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [taskData, setTasks] = useState([
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'February 5th at 2pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'School Meeting',
        day: 'December 14th at 5am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shoping',
        day: 'March 3th at 4pm',
        reminder: true,
      },
      {
        id: 4,
        text: 'Test Task',
        day: 'April 6th at 8pm',
        reminder: true,
      },
      {
        id: 5,
        text: 'Food Shoping',
        day: 'March 8th at 2pm',
        reminder: true,
      }
  ])

  // delete tasks
  // *** will delete the ID item if it is not different than the one clicked
  const deleteTask = (id) => {
    setTasks(
      taskData.filter((task) =>
        task.id !== id)
      )
  }

  // change reminder
  // *** we copy/create new array, and change the value of 'reminder' to its oposite value
  const changeReminder = (id) => {
    setTasks(
      taskData.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder } : task
      )
    )
  }

  // add task information
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...taskData, newTask])
  }

  return (
    <div className='bk'>
      <div className='container'>

            <Header addForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />{/*react componenet*/}

            {showAddTask ? (<AddTask onAdd={addTask} />) : ('')}

            {taskData.length > 0 ? (
              <Tasks tasks={taskData} onDelete={deleteTask} onReminder={changeReminder} />
              ) : (
                'No Tasks Avalible'
              )
            }

      </div>
    </div>
  );
}

export default App;
