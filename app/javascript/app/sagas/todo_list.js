import "regenerator-runtime/runtime"; /* NOTE Is this needed?? -TW */f

import { all, call, put, takeEvery } from 'redux-saga/effects'

/* Asynchronous Requests */
const INITIALIZE_LIST_REQUESTED = 'INITIALIZE_LIST_REQUESTED'
const CREATE_LIST_REQUESTED     = 'CREATE_LIST_REQUESTED'
const DELETE_LIST_REQUESTED     = 'DELETE_LIST_REQUESTED'
const COMPLETE_TASK_REQUESTED   = 'COMPLETE_TASK_REQUESTED'
const CREATE_TASK_REQUESTED     = 'CREATE_TASK_REQUESTED'
const DELETE_TASK_REQUESTED     = 'DELETE_TASK_REQUESTED'

/* Routes */
const INITIALIZE_LIST_ROUTE = 'lists/init.json'
const CREATE_LIST_ROUTE     = '/lists/new.json'
const DELETE_LIST_ROUTE     = `/lists/${list_id}.json`
const COMPLETE_TASK_ROUTE   = `/lists/${list_id}/tasks/${task_id}/complete.json`
const CREATE_TASK_ROUTE     = `/lists/${list_id}/tasks/new.json`
const DELETE_TASK_ROUTE     = `/lists/${list_id}/tasks/${task_id}.json`

/* Responses */
export const INITIALIZE_LIST_FULFILLED = 'INITIALIZE_LIST_FULFILLED'
export const CREATE_LIST_FULFILLED     = 'CREATE_LIST_FULFILLED'
export const DELETE_LIST_FULFILLED     = 'DELETE_LIST_FULFILLED'
export const COMPLETE_TASK_FULFILLED   = 'COMPLETE_TASK_FULFILLED'
export const CREATE_TASK_FULFILLED     = 'CREATE_TASK_FULFILLED'
export const DELETE_LIST_FULFILLED     = 'DELETE_LIST_FULFILLED'


/* Request Fulfillment */
export function* initializeList(){
  yield put({
    type: INITIALIZE_LIST_FULFILLED,
    data: yield call(select, INITIALIZE_LIST_ROUTE)
  })
}

export function* createList({params: { list_id }}){
  yield put({
    type: CREATE_LIST_FULFILLED,
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

export function* deleteList({params: { list_id }}){
  yield put({
    type: DELETE_LIST_FULFILLED,
    data: yield call(destroy, CREATE_LIST_ROUTE)
  })
}

export function* completeTask({params: { list_id, task_id }}){
  yield put({
    type: COMPLETE_TASK_FULFILLED,
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

export function* createTask({params: { list_id }}){
  yield put({
    type: CREATE_TASK_FULFILLED,
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

export function* deleteTask({params: { list_id, task_id }}){
  yield put({
    type: DELETE_LIST_FULFILLED,
    data: yield call(destroy, CREATE_LIST_ROUTE)
  })
}

export default function* todoListSagas(){
  yield all([
    takeEvery(INITIALIZE_LIST_REQUESTED, initializeList),

    takeEvery(CREATE_LIST_REQUESTED,     createList),
    takeEvery(DELETE_LIST_REQUESTED,     deleteList),

    takeEvery(COMPLETE_TASK_REQUESTED,   completeTask),
    takeEvery(CREATE_TASK_REQUESTED,     createTask),
    takeEvery(DELETE_TASK_REQUESTED,     deleteTask)
  ])
}

/* Helper Functions */
const destroy = path => {
  fetch(path, {
    method:  'DELETE',
    headers: {
      'Content-Type':     'application/json',
      'X-CSRF-Token':     $('meta[name="csrf-token"]').attr('content');,
      'X-Requested-With': 'XMLHttpRequest'
    },
    body:        JSON.stringify(params),
    credentials: 'same-origin'
  })
    .then(response => response.json())
    .catch(error   => error)
}

const insert = (path, params) => {
  fetch(path, {
    method:  'PUT',
    headers: {
      'Content-Type':     'application/json',
      'X-CSRF-Token':     $('meta[name="csrf-token"]').attr('content');,
      'X-Requested-With': 'XMLHttpRequest'
    },
    body:        JSON.stringify(params),
    credentials: 'same-origin'
  })
    .then(response => response.json())
    .catch(error   => error)
}

const select = path => {
  fetch(path)
    .then(response => response.json())
    .catch(error   => error)
}
