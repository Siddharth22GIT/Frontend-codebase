export{}

let inputName = prompt('Enter your name...')

function welcomeMessage(inputName: string){
    document.getElementById('demo')!.innerText = "Welcome 🙏 " + inputName
}

welcomeMessage("Sid")