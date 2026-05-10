function identify(value) {
    return value;
}
let numResult = identify(100);
let strResult = identify("Hello, TypeScript!");
let result = `Number Value: ${numResult} <br> String Value: ${strResult}`;
document.getElementById("output").innerHTML = result;
console.log("NUmber: ", numResult);
console.log("String: ", strResult);
export {};
