import React from 'react'
import { useSelector } from 'react-redux'
import './TaskView.css'
import DisplayTask from '../../components/DisplayTask/DisplayTask'

const TaskView = () => {
  const tasks = useSelector((state) => state.customers)
  return (
    <div>
        <div className="task-container">
        {
          tasks.map((task,index) => {
            // console.log(index);
             return <DisplayTask key={index} name={task.name} date={task.date} time={task.time} index={index} />
          })
        }
        </div>
    </div>
  )
}

export default TaskView