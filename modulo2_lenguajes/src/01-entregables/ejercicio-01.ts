console.log("************** DELIVERABLE 01 *********************");

// Head
const head = <E>(arr: Array<E>): E => {
  const [first] = arr;
  return first;
};
console.log("HEAD result: ", head([0, 1, 2]));

// Tail
const tail = <E>(arr: Array<E>): Array<E> => {
  const [, ...restante] = arr;
  return restante;
};
console.log("TAIL result: ", tail([0, 1, 2, 3, 4]));

// Init
const init = <E>(arr: Array<E>): Array<E> => {
  return arr.slice(0, -1);
};
console.log("INIT result: ", init([0, 1, 2, 3, 4]));

// Last
const last = <E>(arr: Array<E>): E => arr.slice(-1)[0];
console.log("LAST result: ", last([0, 1, 2, 3, 4]));
