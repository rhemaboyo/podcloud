# PodCloud

[Podcloud Live!](http://podcloudapp.herokuapp.com/#/)

PodCloud is a podcast streaming app inspired by SoundCloud, built using Ruby on Rails, React, Redux, and PostgreSQL.    

## Features & Implementation

PodCloud not only allows user to stream their favorite podcasts with one search, but it also allows them to start their own Podcast and upload episodes for the world to hear at the click of a button.

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

If the search is successful, iTunes responds with a JSON object that provides params that can be used to create a Podcast Object, with data that can be managed by PostgreSQL.

### Episodes

In order to get all of the episodes for the podcast, iTunes provides us with a feedUrl property: an xml page that provides the details for every single episode of the podcast we've searched for. We then use a very helpful ruby gem, FeedJira, to parse the xml and create an Episode object:

```ruby
def get_episodes(podcast)
  response = RestClient.get(podcast.feed_url)
  feed = Feedjira::Feed.parse_with(Feedjira::Parser::ITunesRSS, response)
  episodes = feed.entries
  episodes.each do |episode|
    Episode.create!(
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

### Search Bar

Before adding a podcast to the site most users will usually search for the podcast they are looking for. When a user inputs a term into the search bar, we scan our database for all podcasts that have that phrase in the title, and display them.

```ruby
class Api::SearchController < ApplicationController
  def show
    @podcasts = Podcast.where(
    'title ILIKE ANY ( array[?] )', ["#{params[:term]}%", "% #{params[:term]}%"]
    )
    if @podcasts
      render :show
    else
      render json: ['No Results Found'], status: 404
    end
  end
end
```
In the search controller, we do a case insensitive query for podcasts with titles that start with, or have a word that starts with the users search term. If none are found the user can then add the podcast they are looking for to our site.

### Other Features

When a user plays a track, they can pause, rewind, and fast forward with a progress bar that will always be displayed and keep the track playing, no matter where they go on the site.

Users also have the ability to personalize their avatars and banner images and manage their own podcasts by clicking on the `Created Podcasts` tab and visiting their podcast pages. Once there, they have the ability to upload, edit, and delete episodes at the click of a button, while other users cannot.

Once podcasts are uploaded, users can make comments and discover other podcasts they may be interested in. 

## Future Directions for the Project

In the future I hope to implement search functionality so that users can find podcasts in a quicker fashion and if the show they are looking for does not exist in our database, it will be added automatically.

I would like to implement subscriptions so that users visit a page showing only new episodes of podcasts they are subscribed to.

I think that adding pagination to the home page so that all podcast episodes are not returned at once would also be an important future implementation.
