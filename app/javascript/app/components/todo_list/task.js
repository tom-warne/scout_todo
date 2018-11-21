import React, { Component } from 'react'

/* Components */
import DeleteTaskButton   from 'components/todo_list/delete_task_button'
import CompleteTaskButton from 'components/todo_list/complete_task_button'

const Task = ({ id, title, complete, dispatch }) => {
  return(
    <div>
      <strong style={{textDecoration: complete ? 'line-through' : 'none'}}>
        {title}
      </strong>
      {<DeleteTaskButton task_id={id} {...{dispatch}} />}
      {<CompleteTaskButton task_id={id} {...{dispatch}} />}
    </div>
  )
}

export default Task
