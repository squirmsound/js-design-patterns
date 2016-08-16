import { releases } from './data/releases';

const newReleases = releases;

exports.projectArr = () => {
  const videoAndTitlePairs = [];
  // Use forEach function to accumulate {id, title} pairs from each video.

  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);

  newReleases.forEach(video => {
    videoAndTitlePairs.push({ id: video.id, title: video.title });
  });

  console.log('FOREACH PROJECTION:', videoAndTitlePairs)
  return videoAndTitlePairs;
}