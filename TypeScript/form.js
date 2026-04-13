"use strict";
let user1 = {
    name: "Gajodhar Bhaiya",
    email: "gajjubhai@gmail.com",
    address: "Tihar jail: cell-09"
};
document.getElementById('form').innerHTML =
    " Name: " + user1.name +
        "<br> Email: " + user1.email +
        "<br> Phone: " + (user1.phone ?? "Not provided") +
        "<br> Address: " + user1.address;
