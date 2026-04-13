export{}

function add(a:number, b:number){
    return a + b;
}

let result: number = add(3,4)

document.getElementById('demo')!.innerHTML = result.toString()


