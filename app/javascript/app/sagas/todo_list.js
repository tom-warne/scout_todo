import "regenerator-runtime/runtime"; /* NOTE Is this needed?? -TW */

import { all, call, put, takeEvery } from 'redux-saga/effects'

/* Routes */
const INITIALIZE_TODO_LIST_ROUTE = 'todo_list/init.json'
const CREATE_LIST_ROUTE          = 'todo_list/create_list.json'
const DELETE_LIST_ROUTE          = 'todo_list/delete_list.json'
const COMPLETE_TASK_ROUTE        = 'todo_list/complete_task.json'
const CREATE_TASK_ROUTE          = 'todo_list/create_task.json'
const DELETE_TASK_ROUTE          = 'todo_list/delete_task.json'

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
function* initializeTodoList(){
  yield takeEvery(INITIALIZE_TODO_LIST_REQUEST, function*(){
    yield put({
      type: INITIALIZE_TODO_LIST_FULFILLED,
      data: yield call(select, INITIALIZE_TODO_LIST_ROUTE)
    })
  })
}

function* createList(){
  yield takeEvery(CREATE_LIST_REQUEST , function*(){
    yield put({
      type: CREATE_LIST_FULFILLED,
      data: yield call(insert, CREATE_LIST_ROUTE)
    })
  })
}

function* deleteList(){
  yield takeEvery(DELETE_LIST_REQUEST , function*({list_id}){
    yield put({
      type: DELETE_LIST_FULFILLED,
      data: yield call(destroy, DELETE_LIST_ROUTE, {list_id})
    })
  })
}

function* completeTask(){
  yield put({
    type: COMPLETE_TASK_FULFILLED,
    data: yield call(insert, COMPLETE_TASK_ROUTE)
  })
}

function* createTask(){
  yield takeEvery(CREATE_TASK_REQUEST , function*({list_id, title}){
    yield put({
      type: CREATE_TASK_FULFILLED,
      data: yield call(insert, CREATE_TASK_ROUTE, {list_id, title})
    })
  })
}

function* deleteTask(){
  yield takeEvery(DELETE_TASK_REQUEST , function*({task_id}){
    yield put({
      type: DELETE_TASK_FULFILLED,
      data: yield call(destroy, DELETE_TASK_ROUTE, {task_id})
    })
  })
}

export default function* todoListSagas(){
  yield all([
    initializeTodoList(),
    createList(),
    deleteList(),
    createTask(),
    deleteTask()
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
