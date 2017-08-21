## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**LandingPageContainer**
 - Sample Tracks Index Items

**HomeContainer**
 - Home
 - Nav Bar
 - search form
 - Tracks Index
 - Side Bar
 - Progress Bar

**TracksContainer**
 - Track Index Items
 - Comment Form

**SideBar**
 - Follow Index Items
 - Like Index Items
 - Recent Plays Index Items

**ProgressBar**
 - Track

**NavBar**
 - Search Form

**SearchContainer**
 - Search Results Index

**SearchResultsIndex**
 - Search Result Index Items

**UserShowPageContainer**
 - User Tracks index items
 - Side Bar

**SongShowContainer**
 - Comment Form
 - Comment Index Items
 - Side Bar

**UploadContainer**
 + UploadForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/stream" | "HomePageContainer" |
| "/" | "LandingPageContainer" |
| "/:user-name" | "UserShowContainer" |
| "/:artist-user-name/track-name " | "TrackShowContainer" |
| "/:artist-user-name/tracks | "ArtistTracksIndex" |
| "/upload" | "UploadContainer" |
| "/search?q=what%20i%20searched%20for" | "SearchResultsContainer"
| "/search" | "Search" |
