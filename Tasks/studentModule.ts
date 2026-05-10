interface Student {
  name: string;
  email: string;
  password: string;
}

// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm") as HTMLFormElement;
  const output = document.getElementById("output") as HTMLDivElement;

  form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // 🔥 VERY IMPORTANT

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const student: Student = {
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