import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Sagas */
import {
  COMPLETE_TASK_REQUEST,
  DELETE_TASK_REQUEST
} from 'sagas/todo_list'

/* Components */


@connect(
  state => state.todoList,
  null
)
export default class TaskContainer extends Component {
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
        {this.props.id}
      </div>
    )
  }

  /** Helpers **/

}
