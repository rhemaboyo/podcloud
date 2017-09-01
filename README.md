# PodCloud

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://podcloudapp.herokuapp.com/#/
[trello]: https://trello.com/b/WqkLPfUL/podcloud

Podcloud is a podcast streaming app inspired by SoundCloud, built using Ruby on Rails, React, Redux, and PostgreSQL.    

## Features & Implementation

Podcloud not only allows user to stream their favorite podcasts with one search, but it also allows them to start their own Podcast and upload episodes for the world to hear at the click of a button.

### Podcast search

When a user inputs the title of the podcast they are looking for, an AJAX request is immediately sent to the iTunes Search API:

```javascript
$.ajax({
  method: 'GET',
  url: "https://itunes.apple.com/search?" + $.param({
    country: 'us',
    media: 'podcast',
    entity: 'podcast',
    attribute: 'titleTerm',
    term: `${this.state.searchTerm}`,
  }),
})
```

If the search is successful, Itunes responds with a JSON object that provides params that can be used to create a Podcast Object.

### Episodes

In order to get all of the episodes for the podcast, Itunes provides us with a feedUrl property: an xml page that provides the details for every single episode of the podcast we've searched for. I then used a very helpful ruby gem, FeedJira, to parse the xml and create my Episode object:

```ruby
def get_episodes(podcast)
  response = RestClient.get(podcast.feed_url)
  feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
  episodes = feed.entries
  episodes.each do |episode|
    Episode.create(
      podcast_id: podcast.id,
      title: episode.title,
      summary: episode.summary,
      pub_date: episode.published,
      audio_url: episode.enclosure_url,
      duration: episode.itunes_duration,
      audio_type: episode.enclosure_type,
      image_url: podcast.logo_url
    )
  end
end
```

### Other Features

Once podcasts are uploaded, users can make comments and discover other podcasts the may be interested in.

## Future Directions for the Project

In the future I hope to implement search functionality, subscribing, and add pagination to the home page so that all podcast episodes are not returned at once.
