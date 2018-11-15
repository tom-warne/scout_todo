import todoListSaga from 'sagas/todo_list'

export default function* sagas(){
  yield all([
    todoListSaga
  ])
}
