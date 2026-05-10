export{}

interface Student{
    name: string;
    age:number
}

function addStudent(): void{
    const name = (document.getElementById('name') as HTMLInputElement).value
    const age = Number((document.getElementById('age') as HTMLInputElement).value)

    const student: Student ={
        name:name,
        age:age
    }

    //? Display the output
    const output = document.getElementById('output')!;

    output.innerHTML = `
    Name: ${student.name} <br>
    Age: ${student.age}`;

    //? Make the function accessible in HTML
    (window as any).addStudent = addStudent
}