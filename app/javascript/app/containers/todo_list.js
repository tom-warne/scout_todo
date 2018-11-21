import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Containers */
import CreateTaskForm from 'containers/todo_list/create_task_form'

/* Components */
import CreateListButton from 'components/todo_list/create_list_button'
import DeleteListButton from 'components/todo_list/delete_list_button'
import List             from 'components/todo_list/list'
import Task             from 'components/todo_list/task'

/* Sagas */
import { INITIALIZE_TODO_LIST_REQUEST } from 'sagas/todo_list'

@connect(
  ({todoList: {lists, tasks}}) => ({lists, tasks}),
  null
)
export default class TodoListContainer extends Component {
  componentWillMount(){
    this.props.dispatch({type: INITIALIZE_TODO_LIST_REQUEST})
  }
  componentDidMount(){}
  componentWillReceiveProps(nextProps){}
  shouldComponentUpdate(nextProps, nextState){ return true }
  componentWillUpdate(nextProps, nextState){}
  componentDidUpdate(prevProps, prevState){}
  componentWillUnmount(){}

  /** Styles **/
  listHolderStyles = {
    paddingTop: '40px'
  }

  outerStyles = {
    padding:         '20px',
    margin:          '20px',
    backgroundColor: 'rgb(147, 204, 234)',
    borderRadius:    '20px',
    border:          'solid 2px black'
  }

  /** Render **/
  render(){
    const { dispatch, lists, tasks } = this.props
    return(
      <div style={this.outerStyles}>
        <CreateListButton {...{dispatch}} />
        <div style={this.listHolderStyles}>
          {lists.map(list =>
            <List key={list.id} {...list} {...{dispatch}}>
              <DeleteListButton list_id={list.id} {...{dispatch}} />
              {tasks
                .filter(task => task.list_id === list.id)
                .map(   task => <Task key={task.id} {...task} {...{dispatch}} />)}
              <CreateTaskForm list_id={list.id} {...{dispatch}}/>
            </List>
          )}
        </div>
      </div>
    )
  }

  /** Helpers **/
}
