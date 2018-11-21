import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { CREATE_LIST_REQUEST } from 'sagas/todo_list'

const CreateListButton = ({ dispatch }) => {
  return(
    <button
      className = 'btn btn-primary float-right'
      onClick   = {() => dispatch({type: CREATE_LIST_REQUEST})}>

      Create New List!
    </button>
  )
}

export default CreateListButton
