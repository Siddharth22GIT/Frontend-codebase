"use strict";
let user = {
    name: "Kallu Kalia",
    greet() {
        return "Aslam-Walekum Janab " + this.name;
    }
};
function callGreet() {
    if (user.greet) {
        alert(user.greet());
    }
}
window.callGreet = callGreet;
