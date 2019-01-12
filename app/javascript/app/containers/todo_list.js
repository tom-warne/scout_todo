import React, { Component } from 'react'
import { connect }          from 'react-redux'

/* Components */
import CreateListButton from 'components/todo_list/create_list_button'
import List             from 'components/todo_list/list'

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
  outerStyles = {
    padding:         '20px',
    margin:          '20px',
    backgroundColor: 'rgb(147, 204, 234)',
    borderRadius:    '20px',
    border:          'solid 2px black'
  }

  titleStyles = {
    fontWeight: 'bold',
    fontSize:   '2em'
  }

  /** Render **/
  render(){
    const {dispatch, lists, tasks} = this.props
    return(
      <div style={this.outerStyles}>
        <span style={this.titleStyles}>Simple React/Redux TODO List</span>
        <span>
          <CreateListButton {...{dispatch}} />
        </span>
        <div>
          {lists.map(list =>
            <List
              key   = {list.id}
              tasks = {tasks.filter(task => task.list_id === list.id)}
              {...list}
              {...{dispatch}} />
          )}
        </div>
      </div>
    )
  }

  /** Helpers **/
}
