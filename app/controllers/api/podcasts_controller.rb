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

  def index
    @podcasts = Podcast.all
  end

  def create_original_podcast
    if podcast_params.include?(:original_logo)
      @podcast = Podcast.new(podcast_params)
      if @podcast.save
        @episodes = []
        render :show
      else
        render json: @podcast.errors.full_messages, status: 422
      end
    else
      render json: ['Please choose an image as your logo'], status: 422
    end
  end

  def show
    @podcast = Podcast.find(params[:id])
    if @podcast
      @episodes = @podcast.episodes
      render :show
    else
      render json: ['No such podcast available'], status: 404
    end
  end

  private

  def podcast_params
    params.require(:podcast).permit(:title, :logo_url, :feed_url, :admin_id,
                                    :itunes_id, :original_logo)
  end
end
