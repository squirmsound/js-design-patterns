import { movies } from './data/movies';

const movieLists = movies;

exports.mapConcatAllQuery = () => {
  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.

  Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
      subArray.forEach(function(item) {
        results.push(item);
      });
    });

    return results;
  };

  // ES5
  // const videos = movieLists.
  // map(function(movieList) {
  //   console.log('MOVIELIST', movieList)
  //   return movieList.videos.map(function(video) {
  //     console.log('VIDEO', video.id)
  //     return video.id;
  //   });
  // }).
  // concatAll();

  // ES6
  const videos = movieLists.
    map(movieList => {
      return movieList.videos.
        map(video => {
          return video.id;
        });
      }).
      concatAll();



  console.log('QUERYING A TREE WITH MAP & CONCATALL:', videos)
  // ------------   INSERT CODE HERE!  -----------------------------------

}