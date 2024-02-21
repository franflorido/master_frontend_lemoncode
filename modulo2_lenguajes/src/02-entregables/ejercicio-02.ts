console.log("************** DELIVERABLE 02 *********************");

const concat = <E>(a: Array<E>, b: Array<E>): Array<E> => {
  return [...a, ...b];
};
console.log("Resultado de Concat: ", concat([0, 1, 2], [3, 4, 5]));

const multipleConcat = <E>(...collection: Array<Array<E>>): Array<E> => {
  let result: Array<E> = [];
  for (const item of collection) {
    result = [...result, ...item];
  }
  return result;
};

console.log(
  "Resultado de multiple Concat: ",
  multipleConcat([0, 1, 2, 3], [4, 5, 6], [7, 8, 9], [10])
);
