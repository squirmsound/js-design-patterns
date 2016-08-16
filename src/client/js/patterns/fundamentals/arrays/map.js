import { releases } from './data/releases';

const newReleases = releases;

exports.projectMap = () => {
  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  console.log('MAP:', newReleases.map(video => { return { id: video.id, title: video.title }; }))
  return newReleases.map(video => { return { id: video.id, title: video.title }; });
  // return newReleases.map(function(video) {
  //   return { id: video.id, title: video.title };
  // });
  // ------------ INSERT CODE HERE! -----------------------------------
};