import React, { Component } from 'react'

/* Sagas */
import { DELETE_TASK_REQUEST } from 'sagas/todo_list'

const DeleteTaskButton = ({dispatch, task_id}) => {
  const styles = {
    margin: '5px'
  }

  return(
    <button
      className = 'btn btn-sm btn-danger'
      style     = {styles}
      onClick   = {() => dispatch({type: DELETE_TASK_REQUEST, task_id})}>

      <strong>X</strong>
    </button>
  )
}

export default DeleteTaskButton
