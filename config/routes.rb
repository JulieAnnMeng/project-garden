Rails.application.routes.draw do
  # resources :users

  post "/login", to: "sessions#create"
  
  # get "/me" , to: "sessions#show"
  # delete "/me", to: "sessions#destroy"
  
  # post "/signup", to: "users#create"
  # delete "/logout", to: "sessions#destroy"

end
