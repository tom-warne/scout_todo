import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import { CREATE_LIST_REQUEST } from 'sagas/todo_list'

const CreateListButton = ({ dispatch }) => {
  return(
    <button
      className = 'btn btn-lg btn-primary'
      onClick   = {() => dispatch({type: CREATE_LIST_REQUEST})}>

      Create New List!
    </button>
  )
}

export default CreateListButton
