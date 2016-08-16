import { names } from './data/names';

const namesList = names;

exports.forEach = () => {
  console.log('FOREACH:');

  namesList.forEach((name) => {
    console.log(name);
  });
};
