"use strict";
// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    const output = document.getElementById("output");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 🔥 VERY IMPORTANT
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const student = {
            name,
            email,
            password
        };
        // Display output
        output.innerHTML = `
      <p><b>Name:</b> ${student.name}</p>
      <p><b>Email:</b> ${student.email}</p>
      <p><b>Password:</b> ${student.password}</p>
    `;
    });
});
