import React, { Component } from 'react'

/* Containers */
import CreateTaskForm from 'containers/todo_list/create_task_form'

/* Components */
import DeleteListButton from 'components/todo_list/delete_list_button'
import Task             from 'components/todo_list/task'

const List = ({id, dispatch, tasks}) => {
  const listHolderStyles = {
    padding:         '20px',
    border:          'solid 1px black',
    borderRadius:    '5px',
    backgroundColor: 'rgb(250, 250, 225)',
    marginBottom: '20px'
  }

  return(
    <div style={listHolderStyles}>
      <DeleteListButton list_id={id} {...{dispatch}} />
      {tasks.map(task => <Task key={task.id} {...task} {...{dispatch}} />)}
      <CreateTaskForm list_id={id} {...{dispatch}}/>
    </div>
  )
}

export default List
