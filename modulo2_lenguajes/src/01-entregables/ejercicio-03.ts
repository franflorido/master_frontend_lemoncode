console.log("************** DELIVERABLE 03 *********************");

// Clone
function clone(source) {
  return { ...source };
}

console.log(clone({ name: "Maria", surname: "Ibañez" }));

// Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  let result = { ...target, ...source };
  return result;
}

console.log(merge(a, b));
