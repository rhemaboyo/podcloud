class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.includes(:podcast).all.order(pub_date: "DESC")
    render :index
  end

  def create
    @episode = Episode.new(episode_params)
    if @episode.save
      @comments = []
      render :show
    else
      render json: @episode.errors.full_messages, status: 422
    end
  end

  def update
    @episode = Episode.find(params[:id])
    if @episode.update(episode_params)
      render :show
    else
      render json: @episode.errors.full_messages, status: 422
    end
  end

  def show
    @episode = Episode.includes(comments: :user).find(params[:id])
    if @episode
      @comments = @episode.comments.order(created_at: "DESC")
      render :show
    else
      render json: ['No such podcast available'], status: 404
    end
  end

  def destroy
    @episode = Episode.find(params[:id])
    @episode.destroy
    render :show
  end

  private

  def episode_params
    params.require(:episode).permit(:title, :summary, :pub_date,
                                    :podcast_id, :image_url, :original_audio)
  end

end
