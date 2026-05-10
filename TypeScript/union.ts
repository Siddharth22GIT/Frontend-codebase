export{}

//arrays

let A: number[] = [1,2,3,4]
let B: number[] = [5,6,7,8]

//Union function 
function getUnion(arr1: number[], arr2: number[]):number[]{
    return [...new Set([...arr1, ...arr2])]
}

//Intersection function
function getIntersection(arr1: number[], arr2: number[]):number []{
    return arr2.filter(item => arr2.includes(item))
}

//result
let unionResult: number[] = getUnion(A,B)

let intersectionResult: number[] = getIntersection(A,B)

let result: string = 
`
Array A: [${A}] <br>
Array B: [${B}] <br>
<b> Union: </b> [${unionResult}] <br>
<b> Intersection: </b> [${intersectionResult}] 
`

document.getElementById('output')!.innerHTML = result

//console
console.log("Union: ", unionResult);
console.log("Intersection: ",  intersectionResult);



