import { releases } from './data/releases';

const newReleases = releases;

exports.fitlerArray = () => {
  const videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------

  // Use forEach function to accumulate every video with a rating of 5.0

  // ES5
  // newReleases.forEach(function(video) {
  //   if (video.rating === 5.0) {
  //     videos.push(video);
  //   }
  // });

  // ES6
  newReleases.forEach(video => {
    if (video.rating === 5.0) {
      videos.push(video);
    }
  });

  console.log('FOREACH FILTER:', videos);

  // ------------ INSERT CODE HERE! -----------------------------------
  return videos;
}
