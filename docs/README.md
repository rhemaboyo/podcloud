# PodCloud

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/WqkLPfUL/podcloud

## Minimum Viable Product

PodCloud is a podcast streaming platform inspired by SoundCloud, built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Track upload functionality
- [ ] Track progress bar with continuous play
- [ ] Comments
- [ ] User pages
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: User Model, API, and components (1 days)

**Objective:** Users can upload profile pictures, banner images, about me's, and show tracks on their profile.

### Phase 3: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

### Phase 4: Comments (1 day)

**Objective:** Tracks have comments that can be created by users, read, edited and destroyed through the API.

### Phase 5: Progress Bar (2 days)

**Objective:** Tracks can be played continuously, pause, rewound, skipped, and displayed on any page the user visits.

### Phase 6: Wave forms and comments displays (2 days)

**Objective:** Use canvas to create a wave form user interface for tracks that also displays user comments at that time in the track.

### Bonus Features (TBD)
- [ ] Follows, likes, and recent plays
- [ ] Search
- [ ] Trending
- [ ] Playlists
