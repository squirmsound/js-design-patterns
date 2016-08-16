import { movies } from './data/movies';

const movieLists = movies;

exports.queryingTrees = () => {
  const allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------

  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.

  // ES5
  // movieLists.forEach(function(release) {
  //   const videoList = release.videos;
  //   videoList.forEach(function(video) {
  //     allVideoIdsInMovieLists.push(video.id);
  //   });
  // });

  // ES6
  movieLists.forEach((release) => {
    const videoList = release.videos;
    videoList.forEach((video) => {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  // ------------   INSERT CODE HERE!  -----------------------------------

  console.log('QUERYING A TREE WITH FOREACH:', allVideoIdsInMovieLists)
  return allVideoIdsInMovieLists;

}
