class Api::SearchController < ApplicationController
  def show
    @podcasts = Podcast.where(
    'title ILIKE ANY ( array[?] )', ["#{params[:term]}%", "% #{params[:term]}%"]
    )
    if @podcasts
      render :show
    else
      render json: ['No such podcast available'], status: 404
    end
  end
end
