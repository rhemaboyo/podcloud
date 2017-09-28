Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    get 'episodes/sample/', to: 'episodes#get_sample_episodes'
    resources :users, only: %i(create show update)
    resource :session, only: %i(create destroy)
    resources :podcasts, only: %i(create index show)
    resources :episodes, only: %i(index create show update destroy)
    resources :comments, only: %i(create update destroy)
    resources :search, param: :term, only: %i(show)
    post 'podcasts/original', to: 'podcasts#create_original_podcast'
  end

  root "static_pages#root"
end
