import React, { Component } from 'react'

/* Sagas */
import { COMPLETE_TASK_REQUEST } from 'sagas/todo_list'

const CompleteTaskButton = ({dispatch, task_id}) => {
  return(
    <button
      className = 'btn btn-sm btn-success'
      onClick   = {() => dispatch({type: COMPLETE_TASK_REQUEST, task_id})}>

      <strong>√</strong>
    </button>
  )
}

export default CompleteTaskButton
