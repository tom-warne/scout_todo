import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import {
  DELETE_LIST_REQUEST,
  CREATE_TASK_REQUEST
} from 'sagas/todo_list'

@connect(
  ({todoList: { tasks }}, { id }) => ({
    tasks: tasks.find(task => task.list_id === id)
  }),
  null
)
export default class ListContainer extends Component {
  static propTypes    = {

  }
  static defaultProps = {

  }

  /** Create **/
  state = {

  }

  componentWillMount(){

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
        {this.props.children}
      </div>
    )
  }

  /** Helpers **/

}
