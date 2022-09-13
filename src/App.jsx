import './App.css';
import Task from './components/Task';
import Controlls from './components/Controlls'

import { useState } from 'react'

import date from './packages/date'

const tasksList = [
  {
      content: 'Tarefa Example',
      date: date(),
      completed: false
  }
]

function App() {

  const [tasks, setTasks] = useState(tasksList)

  function addTask(item) {
    setTasks([...tasks, item])
  }

  function rmTask(index) {

    tasks.splice(index, 1)
    setTasks([...tasks])
  }

  function completeTask(index) {
    tasks[index].completed = !tasks[index].completed
    setTasks([...tasks])
  }

  function updateTask(index, mod) {
    tasks[index].content = mod
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <div className="content">

        <div className='controlls'>
          <Controlls addTask={addTask}/>
        </div>

        <div className='tasks'>
            {tasks.map((task, index, t) => {
              return <Task index={index} data={task} rmTask={rmTask} completeTask={completeTask} updateTask={updateTask}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
