// function fetchRandomImageWithOverview() {
//     try{
//       const movieBackdrops = movies.map(movie => ({
//         backdropUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
//         overview: movie.overview,
//         title: movie.original_title
//       }));

//       // Choose a random movie backdrop
//       const randomBackdropInfo = movieBackdrops[Math.floor(Math.random() * movieBackdrops.length)];

//       console.log('Random backdrop info:', randomBackdropInfo);

//       // Update state with the random image and its metadata
//       setRandomImageInfo(randomBackdropInfo);
//     } catch (error) {
//       console.error('Error fetching TMDb data:', error);
//     }
//   }

//   fetchRandomImageWithOverview();