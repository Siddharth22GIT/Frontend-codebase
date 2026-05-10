interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
}

let students: Student[] = [];

const form = document.getElementById("studentForm") as HTMLFormElement;
const list = document.getElementById("studentList") as HTMLUListElement;

function renderStudents(): void {
    list.innerHTML = "";
    students.forEach((student: Student) => {
        const li = document.createElement("li");
        li.textContent = `${student.name} | Age: ${student.age} | Email: ${student.email}`;
        list.appendChild(li);
    });
}

function addStudent(name: string, age: number, email: string): void {
    const newStudent: Student = {
        id: Date.now(),
        name,
        age,
        email
    };
    students.push(newStudent);
    renderStudents();
}

form?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();

    if (!name || !email || isNaN(age)) return;

    addStudent(name, age, email);
    form.reset();
});