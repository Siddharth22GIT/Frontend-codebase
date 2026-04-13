let inputName = prompt('Enter your name...');
function welcomeMessage(inputName) {
    document.getElementById('demo').innerText = "Welcome 🙏 " + inputName;
}
welcomeMessage("Sid");
export {};
