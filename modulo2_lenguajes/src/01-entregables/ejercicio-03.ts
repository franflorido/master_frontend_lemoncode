console.log("************** DELIVERABLE 03 *********************");

function clone(source) {
  let result = {};
  for (const key in source) {
    result[key] = source[key];
  }
  return result;
}

console.log(clone({ name: "Maria", surname: "Ibañez" }));

function merge(source, target) {
  return { ...clone(target), ...clone(source) };
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log(merge(a, b));

/// FORMA MAS FACIL ??

// Clone
function clone2(source) {
  return { ...source };
}

console.log(clone2({ name: "Maria", surname: "Ibañez" }));

// Merge
function merge2(source, target) {
  let result = { ...target, ...source };
  return result;
}

console.log(merge2(a, b));
