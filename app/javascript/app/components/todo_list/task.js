import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { COMPLETE_TASK_REQUEST } from 'sagas/todo_list'

/* Components */
import DeleteTaskButton from 'components/todo_list/delete_task_button'

const Task = ({ id, title, completed, dispatch }) => {
  return(
    <div>
      <strong>
        {title}
        {<DeleteTaskButton task_id={id} {...{dispatch}} />}
      </strong>
    </div>
  )
}

export default Task
