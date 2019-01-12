/* Actions */
import {
  SET_ACTIVE_LIST,
  SET_ACTIVE_TASK
} from 'actions/todo_list'

/* Sagas */
import {
  INITIALIZE_TODO_LIST_FULFILLED,
  CREATE_LIST_FULFILLED,
  DELETE_LIST_FULFILLED,
  COMPLETE_TASK_FULFILLED,
  CREATE_TASK_FULFILLED,
  DELETE_TASK_FULFILLED
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
const todoList = (state = initialState, {data = {}, type}) => {
  const { lists, tasks } = data

  switch(type){

  /* Actions */
  // case SET_ACTIVE_LIST:
  //
  // case SET_ACTIVE_TASK:

  /* Sagas */
  case INITIALIZE_TODO_LIST_FULFILLED:
    return {...state, ...data}

  case CREATE_LIST_FULFILLED:
  case DELETE_LIST_FULFILLED:
    return {...state, lists}

  case COMPLETE_TASK_FULFILLED:
  case CREATE_TASK_FULFILLED:
  case DELETE_TASK_FULFILLED:
    return {...state, tasks}

  default:
    return state
  }
}

export default todoList
