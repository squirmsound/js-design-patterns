import { movies } from './data/movies';

const movieLists = movies;

exports.concatMapQuery = () => {
  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.

  Array.prototype.concatAll = function() {
    const results = [];
    this.forEach(function(subArray) {
      subArray.forEach(function(item) {
        results.push(item);
      });
    });
    return results;
  };

  Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
    map(function(item) {
      return projectionFunctionThatReturnsArray(item);
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
  };

  // ES5
  // const videos = movieLists.
  // concatMap(function(movieList) {
  //   return movieList.videos.
  //   concatMap(function(video) {
  //     return video.boxarts.
  //     filter(function(boxart) { return boxart.width === 150; }).
  //     map(function(boxart) {
  //       return {
  //         id: video.id,
  //         title: video.title,
  //         boxart: boxart.url
  //       };
  //     });
  //   });
  // });

  // ES6
  const videos = movieLists.
  concatMap(movieList => {
    return movieList.videos.
    concatMap(video => {
      return video.boxarts.
      filter(boxart => { return boxart.width === 150; }).
      map(boxart => {
        return { id: video.id, title: video.title, boxart: boxart.url };
      });
    });
  });

  console.log('QUERYING WITH CONCATMAP :', videos)
  // ------------   INSERT CODE HERE!  -----------------------------------

}