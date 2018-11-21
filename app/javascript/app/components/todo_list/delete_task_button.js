import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { DELETE_TASK_REQUEST } from 'sagas/todo_list'

const DeleteTaskButton = ({ dispatch, task_id }) => {
  return(
    <button
      className = 'btn btn-sm btn-light'
      onClick   = {() => dispatch({type: DELETE_TASK_REQUEST, task_id})}>

      <strong style={{color: 'red'}}>X</strong>
    </button>
  )
}

export default DeleteTaskButton
