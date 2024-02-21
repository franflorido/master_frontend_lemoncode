console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

// Head
const hea2d = <E>(arr: Array<E>): E => arr[0];

// Tail
const tail2 = <E>(arr: Array<E>): Array<E> => {
  const [uno, ...restante] = arr;
  return restante;
};

