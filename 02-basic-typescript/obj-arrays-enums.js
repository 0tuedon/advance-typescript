"use strict";
// adding tuples on the previous work
let person = {
    name: 'Maximilan',
    age: 30,
    hobbies: ["maxima"],
    role: [23, "Admin"]
};
// string types in array 
let favouriteActvities;
// can onl put strings as defined in the types
favouriteActvities = ["aports"];
// setting tuples
let role;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
// enums type
let fun = {
    name: "Maximallam",
    age: 30,
    hobbies: ["spoer", "sports"],
    role: Role.USER
};
console.log(person.name);
