const myMap = new Map();

myMap.set("name", "lodash");
myMap.set(100, "Number Key");
const objKey = {id: 1};
myMap.set(objKey, "Object Key")

console.log(myMap.get("name"));
console.log(myMap.get(100));
console.log(myMap.get(objKey));

console.log(myMap.has("name"));

console.log(myMap.size);

for (const [k, v] of myMap) {
  console.log(k, "=>", v);
  }

const map2 = new Map([
  ["package_name", "lodash"],
  ["version", "4.17.5"]
]);
console.log(map2.get("package_name"));// lodash
