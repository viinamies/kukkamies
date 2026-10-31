// Add as many playlists and songs as you like.
// Files are relative to index.html. Spaces in filenames are allowed.
// Example: file: "assets/music/my song.mp3"
window.MUSIC_LIBRARY = [
  {
    id: "chill", name: "NistiRäppiä", description: "Nistiräppiä", color: "#3b82a0",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcK2uy1HosKnGmj3NHOy_vtOCDHkszoJbfhKISpSRcg&s=10", // optional: "assets/covers/chill.jpg"
    songs: [
      { title: "SMC LÄHIÖROTAT | Liukuhihna", artist: "SMC HOODRATS", file: "assets/music/SMC LÄHIÖROTAT - Liukuhihna feat. Rohtori Laine, Paula 07 - datatraveller.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqmG8PoTAKvnCFEmb2BjaujiiGXWyxvhJ1-ZOptbn-g&s=10" },
      { title: "Salmiakkia", artist: "Musta-Lista", file: "assets/music/Salmiakkia - Musta-Lista.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0-Gfq5noGsCtldaHzgDV-knHD44aiXzwyIU08H-E8Q&s=10" },
      { title: "Kaikesta Huolimatta", artist: "MauriPelaa", file: "assets/music/Kaikest Huolimatta Pt2 (feat. Mc Rambo & Iivo) - Snäfä.mp3", cover: "assets/hattulupa.gif" }
    ]
  },
  {
    id: "gaming", name: "Bass Boosted Only", description: "BassBoostedSongsOnly", color: "#7855ba",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8wvLARPMAFgb2Sddd3Hy6QUJ8-ui58btJgbsGU3M4g&s=10",
    songs: [
      { title: "Gettomasa Silmät", artist: "Gettomasa", file: "assets/music/Gettomasa - Silmät (Bass Boosted) - BassBoosted NK.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOR4Kqm4XB2JD0lykuJ86qFBF9C-nIPG8m6C-pQqtstA&s=10" },
      { title: "Kanye West | Mercy", artist: "Kanye West", file: "assets/music/Kanye West - Mercy (Bass Boosted) - BASS BOOSTED SONGS.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKslbAExa7-7LBbySGJIyC-P_c6ec7KLbRagJ2p0BLNg&s=10" },
      { title: "TAKAS RMX2", artist: "Mäkki, Kube & Julma-H", file: "assets/music/MÄKKI, KUBE & JULMA-H - TAKAS RMX2 [BASS BOOSTED] - Naksutin.mp3", cover: "https://www.universalmusic.fi/wp-content/uploads/sites/1528/2021/06/TanTakii_promo_ByMari-Johanna_pressi_rajattu-2172x1000.jpg" },
      { title: "Kyllikki", artist: "Leevi and The Leavings", file: "assets/music/Leevi and The Leavings - Kyllikki [Bass Boosted] - Suomi-Basso.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeYtHdluVG8FppVHBFqYpdJ-0IcpJw87hXX9_47M90A&s=10" },
      { title: "Nautin Elämästä", artist: "Mariliin (Laura Eklund)", file: "assets/music/Nautin Elämästä [Bass Boosted] - Suomi-Basso.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_DPyI623ZPGamRsjFER2vEKlU60OQMD_FFu52IKcHA&s=10" , canvas: "assets/canvas/nig2e.gif" },
      { title: "Shanghain Valot", artist: "Annika Eklund", file: "assets/music/Annika Eklund - Shanghain Valot (Wxse remix) [Bass Boosted] - Suomi-Basso.mp3", cover: "https://i.scdn.co/image/ab67616d0000b27315944aab035481723aa0c227" },
      { title: "Gettomasa Johtotähti", artist: "Gettomasa", file: "assets/music/GETTOMASA - Johtotähti (bass boosted) - Suomi-Basso.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wsqbmqPCACHLf2mZ4__b_Ne-eBQjXQG8Z5d-a2pVRw&s=10" },
      { title: "Gettomasa 500 Hevosta", artist: "Gettomasa", file: "assets/music/GETTOMASA - 500 Hevosta (bass boosted) - Suomi-Basso.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiEZKdgj4afC-MrYgXdZbn_Ar-fcssNdH36tCZcf-ow&s=10" },
    ]
  },
  {
    id: "favorites", name: "Favorites", description: "Your top tracks", color: "#b65b83",
    cover: "",
    songs: [
      { title: "Favorite Song", artist: "Your Artist", file: "assets/music/favorite.mp3", cover: "" }
    ]
  }
];
