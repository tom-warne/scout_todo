class TodoListController < ApplicationController

  def index
  end

  def init
    render status: :ok,
      json: {
        lists: query(List.all.to_sql),
        tasks: query(Task.all.to_sql)
      }
  end

  # List Actions
  def create_list
    List.create(date: Date.current)

    render status: :ok, json: {lists: query(List.all.to_sql)}
  end

  def delete_list
    List.destroy(todo_list_params[:list_id])

    render status: :ok, json: {lists: query(List.all.to_sql)}
  end

  # Task Actions
  def complete_task
  end

  def create_task
    Task.create(todo_list_params.except(:task_id))

    render status: :ok, json: {tasks: query(Task.all.to_sql)}
  end

  def delete_task
    Task.destroy(todo_list_params[:task_id])

    render status: :ok, json: {tasks: query(Task.all.to_sql)}
  end

  # Task Actions

  private

  def todo_list_params
    params
      .require(:todo_list)
      .permit(
        :list_id,
        :task_id,
        :title
      )
  end

end
