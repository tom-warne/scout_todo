import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Components */
import CreateTaskButton from 'components/todo_list/create_task_button'

export default class CreateTaskForm extends Component {
  state = {
    title: ''
  }

  render(){
    const { title }             = this.state
    const { dispatch, list_id } = this.props
    return(
      <div>
        <input
          value    = {title}
          onChange = {e => this.setState({title: e.target.value})} />

        <CreateTaskButton {...{dispatch, list_id, title}} />
      </div>
    )
  }
}
