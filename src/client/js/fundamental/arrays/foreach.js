const names = [
  'Ben',
  'Jafar',
  'Matt',
  'Priya',
  'Brian',
];

export default function forEach() {
  console.log('FOREACH:');

  names.forEach((name) => {
    console.log(name);
  });
};
