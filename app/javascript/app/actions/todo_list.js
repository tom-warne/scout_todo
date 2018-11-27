/* Action Requests */
export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK'

/* Action Fulfillment */
export function setActiveList({list_id}){(
  {type: SET_ACTIVE_LIST, list_id}
)}

export function setActiveTask({task_id}){(
  {type: SET_ACTIVE_TASK, task_id}
)}
