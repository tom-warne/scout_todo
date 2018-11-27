import React, { Component } from 'react'

/* Sagas */
import { CREATE_TASK_REQUEST } from 'sagas/todo_list'

const CreateTaskButton = ({dispatch, list_id, title}) => {
  return(
    <button
      className = 'btn btn-primary form-col'
      onClick   = {() => dispatch({type: CREATE_TASK_REQUEST, list_id, title})}>

      Create New Task!
    </button>
  )
}

export default CreateTaskButton
