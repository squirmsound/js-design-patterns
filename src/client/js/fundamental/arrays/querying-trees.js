const movieLists = [
  {
    name: 'Instant Queue',
    videos: [
      {
        id: 70111470,
        title: 'Die Hard',
        boxarts: [
          {
            width:150,
            height:200,
            url:'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
          },
          {
            width:200,
            height:200,
            url:'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg'
          },
        ],
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxarts: [
          {
            width:200,
            height:200,
            url:'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg'
          },
          {
            width:150,
            height:200,
            url:'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
          },
        ],
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: 'New Releases',
    videos: [
      {
        id: 65432445,
        title: 'The Chamber',
        boxarts: [
          {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
          },
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
          },
        ],
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxarts: [
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
          },
          {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
          },
          {
            width: 300,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
          },
        ],
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

export default function queryingTrees() {

  // ------------   INSERT CODE HERE!  -----------------------------------

  // Use two nested forEach loops to flatten the movieLists into a list of video ids.

  // ES5
  // movieLists.forEach(function(release) {
  //   const videoList = release.videos;
  //   videoList.forEach(function(video) {
  //     allVideoIdsInMovieLists.push(video.id);
  //   });
  // });

  const videoIdsFromMovieList = [];
  // ES6
  movieLists.forEach(list => {
    const videoList = list.videos;
    videoList.forEach(video => {
      videoIdsFromMovieList.push(video.id);
    });
  });

  // ------------   INSERT CODE HERE!  -----------------------------------

  console.log('QUERYING A TREE WITH FOREACH:', videoIdsFromMovieList)
  return videoIdsFromMovieList;

}
