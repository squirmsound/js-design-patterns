import { createSelector } from 'reselect';

const repeatSeasonsSelector = state => state.repeatSeasons;

const formatRepeatSeason = createSelector(
  repeatSeasonsSelector,

  // transformation
  season => {
    season._id === -1
      ? season.title
      : season.title + ' Season ' + season.seasonNumber;
  }
);


let exampleState = {
  programs: {
    repeatSeasons: [{ _id: 345, title: 'Untitled Season', seasonNumber: 12 }, { _id: 346, title: 'Untitled Season2', seasonNumber: 13 }]
  }
};

console.log(repeatSeasonsSelector(exampleState)); // 2.15
