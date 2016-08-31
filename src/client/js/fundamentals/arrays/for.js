const names = [
  'Ben',
  'Jafar',
  'Matt',
  'Priya',
  'Brian',
];

export default function forLoop() {
  console.log('FORLOOP:');
  for(let counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}