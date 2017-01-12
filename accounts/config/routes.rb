Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/products' => "static#products"
  get '/hunts' => "static#hunts"
  get '/timers' => "static#timers"
  get '/switches' => "static#switches"
  get '/forms' => "static#forms"


  namespace :api do
    post 'timers/stop' => "timers#stop"
    post 'timers/start' => "timers#start"
    resources :timers
  end
end
