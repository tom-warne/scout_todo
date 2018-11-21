import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Containers */
import CreateTaskForm from 'containers/todo_list/create_task_form'
import List from 'containers/list'


/* Components */
import CreateListButton from 'components/todo_list/create_list_button'
import DeleteListButton from 'components/todo_list/delete_list_button'
import Task             from 'components/todo_list/task'


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
        <CreateListButton {...{ dispatch }} />

        {lists.map(list =>
          <List key={list.id} {...list}>
            <DeleteListButton list_id={list.id} {...{ dispatch }} />
            {tasks
              .filter(task => task.list_id === list.id)
              .map(   task => <Task key={task.id} {...task} {...{dispatch}} />)}
            <CreateTaskForm list_id={list.id} {...{dispatch}}/>
          </List>
        )}
      </div>
    )
  }

  /** Helpers **/
}
