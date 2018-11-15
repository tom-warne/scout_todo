import React, { Component } from 'react'
import { connect }          from 'react-redux'

@connect(
  state    => ({}),
  dispatch => ({
    emit: type => dispatch({ type })
  })
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
    this.props.emit('INITIALIZE_TODO_LIST')
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

  }

  /** Helpers **/

}
