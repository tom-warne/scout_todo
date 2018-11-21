Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'lists#index'

  namespace :todo_list, only: [] do
    get :init
    resources :lists do
      resources :tasks
    end
  end
end
