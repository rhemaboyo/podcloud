class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.all.order(pub_date: "DESC")
    render :index
  end

  def create
    @episode = Episode.new(episode_params)
    if @episode.save
      render :show
    else
      render json: @episode.errors.full_messages, status: 422
    end
  end

  def episode_params
    params.require(:episode).permit(:title, :summary, :pub_date,
                                    :podcast_id, :image_url, :original_audio)
  end
end
