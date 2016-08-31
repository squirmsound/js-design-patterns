const releases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

export default function projectMap() {
  // ------------ INSERT CODE HERE! -----------------------------------
  Array.prototype.map = function(projectionFunction) {
    var results = [];
    this.forEach(function(itemInArray) {

      // ------------ INSERT CODE HERE! ----------------------------
      // Apply the projectionFunction to each item in the array and add
      // each result to the results array.
      // Note: you can add items to an array with the push() method.
      results.push(projectionFunction(itemInArray));
      // ------------ INSERT CODE HERE! ----------------------------

    });

    return results;
  };
  // Use map function to accumulate {id, title} pairs from each video.
  console.log('MAP:', releases.map(video => { return { id: video.id, title: video.title }; }))
  return releases.map(video => { return { id: video.id, title: video.title }; });
  // return newReleases.map(function(video) {
  //   return { id: video.id, title: video.title };
  // });
  // ------------ INSERT CODE HERE! -----------------------------------
};