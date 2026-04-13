interface User{
    name: string;
    greet?: () => string;
}

let user: User = {
    name: "Kallu Kalia",
    greet(){
        return "Aslam-Walekum Janab " + this.name
    }
}

function callGreet(){
    if(user.greet){
        alert(user.greet())
    }
}

(window as any).callGreet = callGreet;