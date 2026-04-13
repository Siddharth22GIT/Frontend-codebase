// import {add, multiply} from './math.js'
// import {getUser} from './user.js'

// console.log('User: ', getUser());
// console.log('Addition: ', add(2,3));
// console.log('Multiplication: ', multiply(22,28));


import { getMessage } from "./message.js";
import { changeColor } from "./style.js";

window.changeText = function(){
    let element = document.getElementById('title')
    element.innerText = getMessage()
    element.style.color = changeColor()
}