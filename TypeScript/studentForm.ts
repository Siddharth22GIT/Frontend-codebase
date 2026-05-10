export{}

interface Student{
    name: string;
    age: number;
    email: string;
}

function displayStudent(student: Student): void {
    const output = document.getElementById('output')!;
    output.innerHTML = 
    `
    <p><b>Name: <b> ${student.name}</p><br>
    <p><b>Age: <b> ${student.age}</p><br>
    <p><b>Email: <b> ${student.name}</p>
    `
}

//? Handle form submissions

document.getElementById('studentForm')!.addEventListener("submit", function(event){
    event.preventDefault()

    //? Get the values from the form 
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const age = Number((document.getElementById('age') as HTMLInputElement).value);
    const email = (document.getElementById('email') as HTMLInputElement).value;


    //? Create object using type-safe model
    const student: Student = {
        name: name,
        age: age,
        email: email
    }

    //? Display data
    displayStudent(student)
})



