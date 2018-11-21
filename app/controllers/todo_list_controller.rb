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

end
