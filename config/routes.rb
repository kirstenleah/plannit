Rails.application.routes.draw do
  
  resources :comments
  resources :likes
  resources :posts
  resources :users
  resources :countries, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
 
 
end
