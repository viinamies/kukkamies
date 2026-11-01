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
      { title: "Kaikesta Huolimatta", artist: "MauriPelaa", file: "assets/music/Kaikest Huolimatta Pt2 (feat. Mc Rambo & Iivo) - snäfä.mp3", cover: "assets/hattulupa.gif" },
      { title: "Miekkalinna", artist: "Timo Kotipoltto", file: "assets/music/Timo Kotipoltto - Miekkalinna (bass boosted) - Hit-MUSIC.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn79UF6zi0fi04ckNHPr0FAlsYFRpsXqSPLnuyQPPcBg&s=10" },
      {  title: "Mä muutan mökille norjaan", artist: "Köyhä Jonne", file: "assets/music/Köyhä Jonne - Mä muutan mökille Norjaan (bass boosted) - Hit-MUSIC.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgXbKOfJ-JDZd3IpD5DjsIS58oHqaVUs6Ki7RFO3Ubz5qmZOXO659mtZSL4uHVWLg7tM7p7ErzEvYkDJIxXyMvZhJ029RH4fu7fgRkBwxcQ&s=10" },
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
      { title: "Angels Crying", artist: "Unknown", file: "assets/music/Angels Crying [Bass Boosted] - Volvo Racing.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSelTrqwH1aG3MH1aZztdyHFv3fkul9UL3WbOPPFRjA&s=10" },
      { title: "Kesäfiilistelyy", artist: "MrPabloFilms", file: "assets/music/Kesäfiilistelyy [Bass Boosted] [60fps] - Volvo Racing.mp3", cover: "https://64.media.tumblr.com/61d1bfb0f35143acca707f1b98022d6b/tumblr_nzox39ERjV1txe8seo1_500.gifv"},
    ]
  },
  {
    id: "btn", name: "Mixed", description: "Mixed music's", color: "#7855ba",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8ziOOspe07dgV1jcRZrZcVSwt8QF9WvTLUDqQx58Ug&s=10",
    songs: [
      { title: "Burak Yeter - Tuesday", artist: "Danelle Sandoval", file: "assets/mixed/Burak Yeter - Tuesday (Official)ft. Danelle Sandoval - __.mp3", cover: "https://i.ytimg.com/vi/KBjGuEjmPCw/sddefault.jpg" },
      { title: "Stereo love", artist: "Edward Maya, Vika Jigulina", file: "assets/mixed/Edward Maya, Vika Jigulina - Stereo love (Radio Edit) (Lyrics) - LyricsZone.mp3", cover: "https://media.tenor.com/6fcgihnem6gAAAAM/pig-looking-meme.gif" }, 
      { title: "Prada", artist: "Unknown", file: "assets/mixed/cassö, RAYE, D-Block Europe - Prada (Lyrics) - 7clouds Rock.mp3", cover: "https://images.genius.com/6e2c7ab24d2339a3b1e1e968706975c9.1000x1000x1.png" },
      { title: "Aikakone - Odota", artist: "KaijaKoo", file: "assets/mixed/Aikakone - Odota [Bass Boosted][60fps] - Volvo Racing.mp3", cover: "https://images.steamusercontent.com/ugc/931551196253772421/208C371B8E73E667B9955B0CB01CB47E49DFF330/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" }, 
      { title: "Venäläinen ruletti", artist: "Unknown", file: "assets/mixed/Iivo - Venäläistä rulettia [Bass Boosted] - Volvo Racing.mp3", cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Nagant-holstered.jpg/250px-Nagant-holstered.jpg?utm_source=fi.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
      { title: "ikävä lokakuu", artist: "Unknown", file: "assets/mixed/Amispoppia - ikävä lokakuu [Bass Boosted] - Volvo Racing.mp3", cover: "https://i.ytimg.com/vi/lK_jrB8gSQ4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXShIMA8=&rs=AOn4CLDqZIcOK_kgqyKyIqU1AaY6oHvTDg" },
      { title: "Tässäkö tää oli", artist: "Arttu Wiskari", file: "assets/mixed/Arttu wiskari - Tässäkö Tää Oli [Bass Boosted] - Volvo Racing.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtu-cQ6NIS0rXFDY2r2PipE40Nrd7TM-ITtN1JbdlMVg&s=10" },
      { title: "Levrone", artist: "Unknown", file: "assets/mixed/Dont Stop The Music Levrone - swelavin.mp3", cover: "https://media.tenor.com/Do_A45lBpQIAAAAM/bass-life-hd-bass-boosted.gif" },
    ]
  },
  {
    id: "favorites", name: "KPC Records", description: "KokoRuokaLista", color: "#b65b83",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnu3ToffiRuRvfyqfaH6LhkKziCqA4vDaX608nUcSJw&s=10",
    songs: [
      { title: "Mestari", artist: "Gettomasa & Ruuben", file: "assets/music/Gettomasa & Ruuben - Mestari (audio) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNuMGmSZkRXUKYabHCYemy-MHXQkoLppKwrhd2I_3Sg&s=10" },
      { title: "Yo! (Kotibileet)", artist: "Tohtori Getto", file: "assets/music/Tohtori Getto - Yo! (Kotibileet) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3LvUlGWgQoIkIc6RBHMm1humuJn1y9pFLrSSx7ZB2w&s=10" },
      { title: "Ei sitä kirjoteta hoolla", artist: "Gettomasa & Ruuben", file: "assets/music/Gettomasa & Ruuben - Ei sitä kirjoteta hoolla (audio) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNuMGmSZkRXUKYabHCYemy-MHXQkoLppKwrhd2I_3Sg&s=10" },
      { title: "Vellamo tyylillä", artist: "Gettomasa & Ruuben", file: "assets/music/Gettomasa & Ruuben - Vellamo tyylillä (feat. Joosu J) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUxMU4TppZ0_9hyXuDSJKquLnAGDp3xUW9FEskAAMKA&s=10" },
      { title: "Jäävuorisalaatti", artist: "Gettomasa & Ruuben", file: "assets/music/Gettomasa & Ruuben - Jäävuorisalaatti (feat. Are) (audio) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNuMGmSZkRXUKYabHCYemy-MHXQkoLppKwrhd2I_3Sg&s=10" },
      { title: "Hiljaa hyvä tulee", artist: "Gettomasa & Ruuben", file: "assets/music/Gettomasa & Ruuben - Hiljaa Hyvä Tulee (Feat. Stepa) - KPC Records.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9lmECeU_8pn7eo-FrffFvyMQh9iaaCkYbHbrDdcMfQ&s=10" },
    ]
  }
];