// adding tuples on the previous work
let person:
{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string]
} =
{
    name: 'Maximilan',
    age:30,
    hobbies: ["maxima"],
    role:[23,"Admin"]
}

// string types in array 
let favouriteActvities: string[];
// can onl put strings as defined in the types
favouriteActvities=["aports"]

// setting tuples
let role: [number,string];
enum Role {ADMIN,USER};
// enums type
let fun:{

} = {
    name:"Maximallam",
    age:30,
    hobbies:["spoer","sports"],
    role:Role.USER
}

console.log(person.name)
