import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { DELETE_LIST_REQUEST } from 'sagas/todo_list'

const DeleteListButton = ({dispatch, list_id}) => {
  return(
    <button
      className = 'btn btn-xs btn-danger float-right'
      onClick   = {() => dispatch({type: DELETE_LIST_REQUEST, list_id})}>

      <strong>X</strong>
    </button>
  )
}

export default DeleteListButton
