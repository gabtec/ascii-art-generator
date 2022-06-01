const b = require("../assets/banner");
const validator = require("../lib/commands/validator");

b.print("v1.0");
b.print();

console.log(validator("red"));
console.log(validator("-red"));
