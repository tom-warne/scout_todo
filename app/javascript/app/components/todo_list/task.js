import React, { Component } from 'react'

/* Components */
import DeleteTaskButton   from 'components/todo_list/delete_task_button'
import CompleteTaskButton from 'components/todo_list/complete_task_button'

const Task = ({complete, dispatch, id, title}) => {
  const taskNameStyles = {
    display: 'inline-block',
    width: '80%',
    background: 'white',
    border: 'solid 1px black',
    borderRadius: '2px',
    marginRight: '5px'
  }

  return(
    <div>
      <span style={taskNameStyles}>
        <strong style={{textDecoration: complete ? 'line-through' : 'none'}}>
          {title}
        </strong>
      </span>
      <span>
        {<DeleteTaskButton   task_id={id} {...{dispatch}} />}
        {<CompleteTaskButton task_id={id} {...{dispatch}} />}
      </span>
    </div>
  )
}

export default Task
