import { releases } from './data/releases';

const newReleases = releases;

exports.filterMapChain = () => {
	// ------------ INSERT CODE HERE! -----------------------------------

  // Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

  // ES5
  // const ratings = newReleases.filter(function(videos) { return videos.rating === 5.0; }).map(function(video) { return video.id; });

  //ES6
  const ratings = newReleases
    .filter(videos => { return videos.rating === 5.0; })
    .map(video => { return { id: video.id }; });
    console.log('FILTER MAP CHAIN:', ratings);

  // ------------ INSERT CODE HERE! -----------------------------------

  return ratings;
}
