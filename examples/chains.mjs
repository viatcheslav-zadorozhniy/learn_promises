export default function() {
  new Promise(resolve => resolve(2))
    .then(x => x * 2) // return 4
    .then(x => Promise.resolve(x * 2)) // return 8
    .then(x => console.log(x))
  ;
};
