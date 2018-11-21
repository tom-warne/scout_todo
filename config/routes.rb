Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'todo_list#index'

  constraints format: :json do
    namespace :todo_list, only: :index do
      get    :init

      put    :create_list
      put    :create_task
      put    :complete_task #toggle

      delete :delete_list
      delete :delete_task
    end
  end
end
