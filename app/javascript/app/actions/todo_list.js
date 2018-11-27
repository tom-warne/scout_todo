/* Action Requests */
export const EDIT_TASK       = 'EDIT_TASK'
export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK'


/* Action Fulfillment */
export function editTask({task_id}){(
  {type: EDIT_TASK, task_id}
)}

export function setActiveList({list_id}){(
  {type: SET_ACTIVE_LIST, list_id}
)}

export function setActiveTask({task_id}){(
  {type: SET_ACTIVE_TASK, task_id}
)}
