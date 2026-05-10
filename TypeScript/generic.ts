export{}

function identify<T>(value:T) :T{

    return value;
}

let numResult: number= identify<number>(100);
let strResult: string= identify<string>("Hello, TypeScript!");
let result: string=`Number Value: ${numResult} <br> String Value: ${strResult}`;
document.getElementById("output")!.innerHTML= result;
console.log("NUmber: ",numResult);
console.log("String: ",strResult);