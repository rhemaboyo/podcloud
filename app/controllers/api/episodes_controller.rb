class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.all.order(pub_date: "DESC")
    render :index
  end
end
