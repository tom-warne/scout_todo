/* Action Requests */
export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK'
export const EDIT_TASK       = 'EDIT_TASK'

/* Action Fulfillment */
export function editTask({ list_id, task_id }){(
  {type: EDIT_TASK, list_id, task_id}
)}

export function setActiveList({ list_id }){(
  {type: SET_ACTIVE_LIST, list_id}
)}

export function setActiveTask({ list_id, task_id }){(
  {type: SET_ACTIVE_TASK, list_id, task_id}
)}
