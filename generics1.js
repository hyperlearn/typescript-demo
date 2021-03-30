function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK
console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript",
// function getArray<T>(items : T[] ) : T[] {
//   return new Array<T>().concat(items);
// }
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(["Hello", "World"]);
// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error
