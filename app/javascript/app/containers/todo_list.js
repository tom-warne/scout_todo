import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Containers */
import List from 'containers/list'
import Task from 'containers/task'

/* Components */
import CreateListButton from 'components/todo_list/create_list_button'

/* Sagas */
import { INITIALIZE_TODO_LIST_REQUEST } from 'sagas/todo_list'


@connect(
  ({todoList: { lists, tasks }}) => ({ lists, tasks }),
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
    return true
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
    const { dispatch, lists, tasks } = this.props
    return(
      <div>
        {lists.map(list =>
          <List key={list.id} {...list}>
            {tasks
              .filter(task => task.list_id === list.id)
              .map(   task => <Task key={task.id} {...task} />)}
          </List>
        )}
        <CreateListButton {...{ dispatch }} />
      </div>
    )
  }

  /** Helpers **/
}
