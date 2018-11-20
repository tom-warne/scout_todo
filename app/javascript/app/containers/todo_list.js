import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import {
  INITIALIZE_LIST_REQUEST,
  CREATE_LIST_REQUEST
} from 'sagas/todo_list'

/* Components */
import List from 'containers/list'
import Task from 'containers/task'

@connect(
  state => state.todoList,
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
    this.props.dispatch(INITIALIZE_TODO_LIST_REQUEST)
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
          <List {...list}>
            {this.props.tasks.map(task =>
              <Task {...task} />
            )}
          </List>
        )}
      </div>
    )
  }

  /** Helpers **/
}
