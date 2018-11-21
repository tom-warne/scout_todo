class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  
  def query(q)
    ActiveRecord::Base.connection.exec_query(q)
  end
end
