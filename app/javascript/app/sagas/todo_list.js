import "regenerator-runtime/runtime";

import {
  all, // Combine Sagas for export
  call, // (fn, args) useful for calling ajax requests
  cps, // (fn, ...args) where fn is a node style function??
  fork, // (fn, ...args) perform a non-blocking call on fn
  put, // Dispatch action to redux reduxer. No longer under saga control.
  race, // {effectName: effect, ...} : returns fastest effect and canels all others
  take, // (): all action, fn: truthy results, String || [String]: match on type key
  takeEvery, // Runs all requests concurrently
  takeLatest, // Cancels any in progress copies and runs latest
  throttle // Prevents actions during cool down to prevent repeatedly hitting server. Imagine an AutoComplete request limiter.
} from 'redux-saga/effects'

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
function* initializeList(){
  yield put({
    type: 'INITIALIZE_LIST_FULFILLED',
    data: yield call(select, INITIALIZE_LIST_ROUTE)
  })
}

function* createList({params: { list_id }}){
  yield put({
    type: 'CREATE_LIST_FULFILLED',
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

function* deleteList({params: { list_id }}){
  yield put({
    type: 'DELETE_LIST_FULFILLED',
    data: yield call(destroy, CREATE_LIST_ROUTE)
  })
}

function* completeTask({params: { list_id, task_id }}){
  yield put({
    type: 'COMPLETE_TASK_FULFILLED',
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

function* createTask({params: { list_id }}){
  yield put({
    type: 'CREATE_TASK_FULFILLED',
    data: yield call(insert, CREATE_LIST_ROUTE)
  })
}

function* deleteTask({params: { list_id, task_id }}){
  yield put({
    type: 'DELETE_LIST_FULFILLED',
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
