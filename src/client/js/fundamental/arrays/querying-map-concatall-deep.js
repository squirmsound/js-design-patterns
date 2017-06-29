import { movies } from './data/movies';

const movieLists = movies;

exports.mapConcatAllQueryDeep = () => {
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

  // ES5
  // return movieLists.
  //   map(function(movieList) {
  //   	return movieList.videos.
  //       map(function(video) {
  //       return video.boxarts.
  //         filter(function(boxart) { return boxart.width === 150; }).
  //         map(function(boxart) {
  //          	return {
  //             id: video.id,
  //             title: video.title,
  //             boxart: boxart.url
  //           };
  //         });
  //       }).
  //       concatAll();
  //   }).
  //   concatAll();

  // ES6
  const videos = movieLists.
    map(movieList => {
      return movieList.videos.
        map(video => {
          return video.boxarts.
          filter(boxart => { return boxart.width === 150; }).
          map(boxart => {
            return { id: video.id, title: video.title, boxart: boxart.url };
          });
        }).
        concatAll();
      }).
      concatAll();

  console.log('QUERYING 3 LEVELS WITH MAP & CONCATALL :', videos)
  // ------------   INSERT CODE HERE!  -----------------------------------

}