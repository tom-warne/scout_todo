import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { DELETE_LIST_REQUEST } from 'sagas/todo_list'

const DeleteListButton = ({ dispatch, list_id }) => {
  return(
    <button
      className = 'btn btn-sm btn-danger'
      onClick   = {() => dispatch({type: DELETE_LIST_REQUEST, list_id})}>

      Delete This List!
    </button>
  )
}

export default DeleteListButton
