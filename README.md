### End Points
| End Point      | HTTP Method   |           Description                   |  Required User registration |
| :---         |    :----:     |          :----:                           | ---:   |
| /api/users/register    | POST          | To Upload Videos                        |  Yes |
| /video/details    |  POST          | To associate Detail of Video uploaded  |  Yes |
| /video/thumbnailUpload    |  POST          | To Upload Thumbnail                        |  Yes |
| /video/delete/:videoID    |DELETE          | To Delete Uploaded Videos and thumbnail corresponding to it |  Yes |
| /video/fetch      |  GET           | To Fetch All Available Videos           | No   |
| /video/thumbnail/:id      |  GET           | To Fetch thumbnail associated with a video  | No   |
| /video/user/registration|8000 | POST | To register the user |  No |
| /video/user/login|8000 | POST | for User Login returns jwt in response |  No |
| /video/search/:keyword|8000 | GET | For Video Playback |  No |
| /video/playback/:id|8000 | GET | For Video Playback |  Yes |
| /video/like/:id|8000 | POST | For Liking The Video |  Yes |
| /video/dislike/:id|8000 | POST | For Dis-Liking The Video |  Yes |