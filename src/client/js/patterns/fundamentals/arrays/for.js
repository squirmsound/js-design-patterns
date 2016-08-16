import { names } from './data/names';

const namesList = names;

exports.forLoop = () => {
  console.log('FORLOOP:');
  for(let counter = 0; counter < namesList.length; counter++) {
    console.log(namesList[counter]);
  }
}