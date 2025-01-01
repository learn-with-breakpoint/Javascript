// in javascript there is ternary operator

let age = 21;
let canDrive = age >= 18 ? true : false;
console.log(canDrive);

// conditional Operators
// there are 4 type of operators in javascript
// or || and && ! not ?? null coalescing
// the operator precedence is as follows not > and > or

// examples of and

let breaker = "############################################################";

console.log(breaker);
console.log("and operator examples: ");
console.log(" true and true", true && true);
console.log(" true and false", true && false);
console.log(" false and true", false && true);
console.log(" false and false", false && false);
console.log(breaker, "\n");

// examples of or
console.log(breaker);
console.log("or operator examples: ");
console.log(" true or true", true || true);
console.log(" true or false", true || false);
console.log(" false or true", false || true);
console.log(" false or false", false || false);
console.log(breaker, "\n");

// examples of not
console.log(breaker);
console.log("not operator examples: ");
console.log(" not true", !true);
console.log(" not false", !false);
console.log(breaker, "\n");

// null coalescing
console.log(breaker);
console.log("null coalescing operator examples: ");
console.log(" ?? null", null ?? "its null");
console.log(" ?? not null", true ?? "not null");
console.log(breaker, "\n");


// javascript has this concept of truthy and falsy. 
// if a variables