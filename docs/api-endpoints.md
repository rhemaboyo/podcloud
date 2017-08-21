# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


GET / - root.html
POST /session - login
DELETE /session - logout
POST /users - signup
GET /tracks - tracks index
GET /users/:user-name - sends back user detail including tracks for user show page
POST /tracks - upload form
GET /tracks/:track-name - track show page; sends track details and comments
GET /search/?q=etc - searches database for username and track-names matching query

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
  - Renders JSON with Tracks by User as well

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tracks

- `GET /api/tracks`
  - Tracks index/search
- `POST /api/tracks`
- `GET /api/tracks/:id`
  - Renders JSON with comments for track as well
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`
  - Deletes all tracks and related comments

### Comments

- `POST /api/notebooks`
- `DELETE /api/notebooks/:id`
- `PATCH /api/notebooks/:id`
