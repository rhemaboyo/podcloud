json.episode do
  json.partial! 'api/episodes/episode', episode: @episode
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
  json.ord @comments.map(&:id)
end
