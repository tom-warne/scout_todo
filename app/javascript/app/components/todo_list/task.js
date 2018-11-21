import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { COMPLETE_TASK_REQUEST } from 'sagas/todo_list'

const Task = ({ id, title, completed, dispatch }) => {
  return(
    <div>
      <strong>
        {title}
        <button
          className = 'btn btn-xs btn-light'
          onClick   = {() => dispatch({type: DELETE_TASK_REQUEST, task_id: id})}>

          X
        </button>
      </strong>
    </div>
  )
}

export default Task
