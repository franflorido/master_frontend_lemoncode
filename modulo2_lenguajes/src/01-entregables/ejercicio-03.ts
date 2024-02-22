console.log("************** DELIVERABLE 03 *********************");

// Clone
function clone(source) {
  return { ...source };
}

console.log(clone({ name: "Maria", surname: "Ibañez" }));

// Merge
function merge(source, target) {
  let result = { ...target, ...source };
  return result;
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log(merge(a, b));
