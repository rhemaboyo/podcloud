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

  def create_original_podcast
    @podcast = Podcast.new(podcast_params)
    if @podcast.save
      @episodes = @podcast.episodes
      render :show
    else
      render json: @podcast.errors.full_messages, status: 422
    end
  end

  def show
    @podcast = Podcast.find_by(itunes_id: params[:id])
    if @podcast
      @episodes = @podcast.episodes
      render :show
    else
      render json: ['No such podcast available'], status: 404
    end
  end

  private

  def podcast_params
    params.require(:podcast).permit(:title, :logo_url, :feed_url, :admin_id, :itunes_id,
                                    :original_logo)
  end
end
