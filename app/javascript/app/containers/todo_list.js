import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Containers */
import List from 'containers/list'
import Task from 'containers/task'

/* Components */
import createListButton from 'components/todo_list/create_list_button'

/* Sagas */
import {
  INITIALIZE_TODO_LIST_REQUEST,
  CREATE_LIST_REQUEST
} from 'sagas/todo_list'


@connect(
  ({todoList: { lists, tasks }}) => ({ lists, tasks}),
  null
)
export default class TodoListContainer extends Component {
  static propTypes    = {

  }
  static defaultProps = {

  }

  /** Create **/
  state = {

  }

  componentWillMount(){
    this.props.dispatch({type: INITIALIZE_TODO_LIST_REQUEST})
  }

  componentDidMount(){

  }

  /** Update **/
  componentWillReceiveProps(nextProps){

  }

  shouldComponentUpdate(nextProps, nextState){
    true
  }

  componentWillUpdate(nextProps, nextState){

  }

  componentDidUpdate(prevProps, prevState){

  }

  /** Destroy **/
  componentWillUnmount(){

  }

  /** Render **/
  render(){
    return(
      <div>
        {this.props.lists.map(list =>
          <List key={list.id} { ...list}>
            {this.props.tasks
              .filter(task => task.list_id === list.id)
              .map(task    => <Task key={task.id} {...task} />)}
          </List>
        )}
        <CreateTaskButton />
      </div>
    )
  }

  /** Helpers **/
}
