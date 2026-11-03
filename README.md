# Wavebox — iPhone Safari + PC

## Add music
Edit `music.js`. Add as many playlists and songs as you like. Put songs in `assets/music/` and covers in `assets/covers/`. Playlist `cover` sets the home card; song `cover` sets individual song art.

## Run
On PC, use a local web server (for example `python -m http.server 8000` in this folder), then visit http://localhost:8000. For iPhone, upload the whole folder to an HTTPS host such as GitHub Pages or Netlify. In Safari open the site, Share > Add to Home Screen.

## iPhone notes
Start playback by tapping Play. Lock-screen controls use Media Session where supported. iOS may stop playback or block transitions in the background; websites cannot override this. Hardware volume buttons control iPhone volume. The service worker caches the website interface, **not your music files**: offline music is not guaranteed. You must host the music files alongside the website.

## Test
Check play/pause, next/previous, playlist repeat, one-song repeat, shuffle, screen lock, and Bluetooth headphones on your actual iPhone.

## Midnight Glass theme
The new design lives in `glass.css`. Edit its accent colors to customize the theme. `style.css` remains as the base layout. All music is configured in `music.js` as before.


## Profile and Canvas updates
Profile is opened from My profile on PC or Profile on iPhone. Profile data is saved locally per browser.
Canvas is displayed under YOUR LIBRARY on PC and in the Now Playing sheet on iPhone.
To add a GIF, place it in assets/canvas/nig2e.gif and set `canvas: "assets/canvas/nig2e.gif"` on the corresponding song in music.js.
The uploaded archive did NOT contain nig2e.gif, so you must copy it into assets/canvas.
After deploying, refresh the page (and if needed clear the site's cached data) to load the updated service worker.


## Remix Badge and reward-video volume
The Remix Badge track is kept outside the visible playlists. Open My profile, choose **Play song to unlock**, and let the full track finish to unlock the badge. The supplied artwork is stored as `assets/canvas/remix-badge.png`.

The Ossin Elite reward video no longer pauses the music. Its overlay includes a Music volume slider so the song volume can be changed on desktop while the video is open.


Selected profile badges now appear directly beneath the playlist count in the profile header. The Remix Badge is named **Kaikki-Punaselle**.
