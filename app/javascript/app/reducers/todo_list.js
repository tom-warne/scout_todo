/* Actions */

/* Sagas */
import {
  INITIALIZE_LIST_FULFILLED,
  CREATE_LIST_FULFILLED,
  DELETE_LIST_FULFILLED,
  COMPLETE_TASK_FULFILLED,
  CREATE_TASK_FULFILLED,
  DELETE_LIST_FULFILLED
} from 'sagas/todo_list'

/* Initial States */
const initialListState = {
  id:         null,
  date:       new Date(),
  created_at: new Date(),
  updated_at: new Date()
}

const initialTaskState = {
  id:         null,
  list_id:    null,
  title:      '',
  complete:   false,
  created_at: new Date(),
  updated_at: new Date()
}

const initialState = {
  activeList: null,
  activeTask: null,
  lists:      [initialListState],
  tasks:      [initialTaskState]
}

/* Reducer */
const todoList = (state = initialState, { data, id, params, type }) => {
  switch(type){

  case INITIALIZE_LIST_FULFILLED:
    return {...state, ...data}

  case CREATE_LIST_FULFILLED:

  case DELETE_LIST_FULFILLED:

  case COMPLETE_TASK_FULFILLED:

  case CREATE_TASK_FULFILLED:

  case DELETE_LIST_FULFILLED:

  default:
    return state
  }
}

export default procurement
