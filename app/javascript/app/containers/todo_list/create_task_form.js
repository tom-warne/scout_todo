import React, { Component } from 'react'

/* Components */
import CreateTaskButton from 'components/todo_list/create_task_button'

export default class CreateTaskForm extends Component {
  state = {
    title: ''
  }

  inputStyles = {
    marginRight: '10px',
    width:       '65%'
  }

  render(){
    const {dispatch, list_id} = this.props
    const {title}             = this.state
    return(
      <div className='form-row'>
        <input
          className = 'form-col'
          style     = {this.inputStyles}
          value     = {title}
          // TODO: Watch for {13} for submit -TW
          onChange  = {e => this.setState({title: e.target.value})} />

        <CreateTaskButton {...{dispatch, list_id, title}} />
      </div>
    )
  }
}
