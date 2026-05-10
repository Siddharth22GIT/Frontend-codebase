//arrays
let A = ["Red", "Green", "Orange", "Yellow", "Blue"];
let B = ["Purple", "Pink", "Yellow", "Blue", "White", "Green"];
//Union function 
function getUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
//Intersection function
function getIntersection(arr1, arr2) {
    return arr2.filter(item => arr2.includes(item));
}
//result
let unionResult = getUnion(A, B);
let intersectionResult = getIntersection(A, B);
let result = `
Array A: [${A}] <br>
Array B: [${B}] <br>
<b> Union: </b> [${unionResult}] <br>
<b> Intersection: </b> [${intersectionResult}] 
`;
document.getElementById('output').innerHTML = result;
//console
console.log("Union: ", unionResult);
console.log("Intersection: ", intersectionResult);
export {};
