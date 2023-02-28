import React from 'react'
import {TaskCard} from "./TaskCard";

export const TasksList = ({tasks}) => {
  return <div>
    {tasks.map(task => (
        <TaskCard key={task._id} task={task}/>
    ))}
  </div>
}
