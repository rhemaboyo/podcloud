Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create show update)
    resource :session, only: %i(create destroy)
    resources :podcasts, only: %i(create show)
    resources :episodes, only: %i(index create show update destroy)
    resources :comments, only: %i(create update destroy)
    post 'podcasts/original', to: 'podcasts#create_original_podcast'
  end

  root "static_pages#root"
end
