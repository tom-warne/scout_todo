import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { CREATE_TASK_REQUEST } from 'sagas/todo_list'

const CreateTaskButton = ({dispatch, list_id, title}) => {
  return(
    <button
      className = 'btn btn-lg btn-primary'
      onClick   = {() => dispatch({type: CREATE_TASK_REQUEST, list_id, title})}>

      Create New Task!
    </button>
  )
}

export default CreateTaskButton
