import "regenerator-runtime/runtime"; /* NOTE Is this needed?? -TW */

import { all, call, put, takeEvery } from 'redux-saga/effects'

const list_id = null
const task_id = null
/* Routes */
const INITIALIZE_TODO_LIST_ROUTE = 'todo_list/init.json'
const CREATE_LIST_ROUTE          = 'todo_list/create_list.json'
const DELETE_LIST_ROUTE          = 'todo_list/delete_list.json'
const COMPLETE_TASK_ROUTE        = `/lists/${list_id}/tasks/${task_id}/complete.json`
const CREATE_TASK_ROUTE          = `/lists/${list_id}/tasks/new.json`
const DELETE_TASK_ROUTE          = `/lists/${list_id}/tasks/${task_id}.json`

/* Asynchronous Requests */
export const INITIALIZE_TODO_LIST_REQUEST = 'INITIALIZE_TODO_LIST_REQUEST'
export const CREATE_LIST_REQUEST          = 'CREATE_LIST_REQUEST'
export const DELETE_LIST_REQUEST          = 'DELETE_LIST_REQUEST'
export const COMPLETE_TASK_REQUEST        = 'COMPLETE_TASK_REQUEST'
export const CREATE_TASK_REQUEST          = 'CREATE_TASK_REQUEST'
export const DELETE_TASK_REQUEST          = 'DELETE_TASK_REQUEST'

/* Responses */
export const INITIALIZE_TODO_LIST_FULFILLED = 'INITIALIZE_TODO_LIST_FULFILLED'
export const CREATE_LIST_FULFILLED          = 'CREATE_LIST_FULFILLED'
export const DELETE_LIST_FULFILLED          = 'DELETE_LIST_FULFILLED'
export const COMPLETE_TASK_FULFILLED        = 'COMPLETE_TASK_FULFILLED'
export const CREATE_TASK_FULFILLED          = 'CREATE_TASK_FULFILLED'
export const DELETE_TASK_FULFILLED          = 'DELETE_TASK_FULFILLED'


/* Request Fulfillment */
export function* initializeTodoList(){
  yield takeEvery(INITIALIZE_TODO_LIST_REQUEST, function*(){
    yield put({
      type: INITIALIZE_TODO_LIST_FULFILLED,
      data: yield call(select, INITIALIZE_TODO_LIST_ROUTE)
    })
  })
}

export function* createList(){
  yield takeEvery(CREATE_LIST_REQUEST , function*(){
    yield put({
      type: CREATE_LIST_FULFILLED,
      data: yield call(insert, CREATE_LIST_ROUTE)
    })
  })
}

export function* deleteList(){
  yield takeEvery(DELETE_LIST_REQUEST , function*({ list_id }){
    yield put({
      type: DELETE_LIST_FULFILLED,
      data: yield call(destroy, DELETE_LIST_ROUTE, { list_id })
    })
  })
}

export function* completeTask({params: { list_id, task_id }}){
  yield put({
    type: COMPLETE_TASK_FULFILLED,
    data: yield call(insert, COMPLETE_TASK_ROUTE)
  })
}

export function* createTask({params: { list_id }}){
  yield put({
    type: CREATE_TASK_FULFILLED,
    data: yield call(insert, CREATE_TASK_ROUTE)
  })
}

export function* deleteTask({params: { list_id, task_id }}){
  yield put({
    type: DELETE_TASK_FULFILLED,
    data: yield call(destroy, DELETE_TASK_ROUTE)
  })
}

export default function* todoListSagas(){
  yield all([
    initializeTodoList(),
    createList(),
    deleteList()
  ])
}

/* Helper Functions */
const destroy = (path, params) => {
  return(
    fetch(path, {
      method:  'DELETE',
      headers: {
        'Content-Type':     'application/json',
        'X-CSRF-Token':     document.querySelector('[name="csrf-token"]').content,
        'X-Requested-With': 'XMLHttpRequest'
      },
      body:        JSON.stringify(params),
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .catch(error   => error)
  )
}

const insert = (path, params) => {
  return(
    fetch(path, {
      method:  'PUT',
      headers: {
        'Content-Type':     'application/json',
        'X-CSRF-Token':     document.querySelector('[name="csrf-token"]').content,
        'X-Requested-With': 'XMLHttpRequest'
      },
      body:        JSON.stringify(params),
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .catch(error   => error)
  )
}

const select = path => {
  return(
    fetch(path)
      .then(response => response.json())
      .catch(error   => error)
  )
}
