class Api::PodcastsController < ApplicationController
  def create
    @podcast = Podcast.new(podcast_params)
    if @podcast.save
      @episodes = get_five_episodes(@podcast.feed_url)
      render :show
    else
      render json: @podcast.errors.full_messages, status: 422
    end
  end

  def show
    @podcast = Podcast.find(params[:id])
    render :show
  end

  private

  def podcast_params
    params.require(:podcast).permit(:title, :logo_url, :feed_url, :itunes_id)
  end
end
