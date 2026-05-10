function addStudent() {
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);
    const student = {
        name: name,
        age: age
    };
    //? Display the output
    const output = document.getElementById('output');
    output.innerHTML = `
    Name: ${student.name} <br>
    Age: ${student.age}`;
    //? Make the function accessible in HTML
    window.addStudent = addStudent;
}
export {};
