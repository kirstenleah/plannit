Rails.application.routes.draw do
  
  resources :comments
  resources :likes
  resources :posts
  resources :users
  resources :countries, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  #
  # Country Routes
  #
  get "/all_countries", to: "countries#all_countries"
  get "/country_code", to: "countries#country_code"
  
  #
  # Users Routes
  #
  get "/me", to: "users#show"
  patch "/update_profile", to: "users#update"
  
  #
  # Posts Routes
  #
  delete "/remove", to: "posts#destroy"
  get "/posts/country/code", to: "posts#posts_by_country"
  get "/posts/images", to: "posts#country_images" 
  get "posts_by_country", to: "posts#posts_by_country"
  
  #
  # Sessions Routes
  #
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
