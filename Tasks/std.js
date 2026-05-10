"use strict";
let students = [];
const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");
function renderStudents() {
    list.innerHTML = "";
    students.forEach((student) => {
        const li = document.createElement("li");
        li.textContent = `${student.name} | Age: ${student.age} | Email: ${student.email}`;
        list.appendChild(li);
    });
}
function addStudent(name, age, email) {
    const newStudent = {
        id: Date.now(),
        name,
        age,
        email
    };
    students.push(newStudent);
    renderStudents();
}
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();
    if (!name || !email || isNaN(age))
        return;
    addStudent(name, age, email);
    form.reset();
});
