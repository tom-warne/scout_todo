class TodoListController < ApplicationController

  def init
    render status: :ok,
      json: {
        lists: query(List.all.to_sql),
        tasks: query(Task.all.to_sql)
      }
  end

  def create_list
    List.create(date: Date.current)

    render status: :ok,
      json: {
        lists: query(List.all.to_sql)
      }
  end

  def delete_list
    List.destroy(todo_list_params[:list_id])

    render status: :ok,
      json: {
        lists: query(List.all.to_sql)
      }
  end

  private

  def todo_list_params
    params
      .require(:todo_list)
      .permit(:list_id)
  end


end
