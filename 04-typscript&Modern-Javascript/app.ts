// 
// let and const they are block scope

// no need to use the function keyword
const add = ()=>{
    return 0;
}

// setting default parameters has to be last on the list.

const addNumber = (a:number, b:number = 1) => {
return a*b;
}

// Spread Operator

const arrayHobbies = ["Swimming", "Coding","Playing Games"]
const newHobbies = ["Adventures"]

newHobbies.push(...arrayHobbies)

// Object Spread

const humans = {
    age:13,
    name:"Samuel"
}

const adamHuman = {...humans}
// Rest parameters
const testUsingRest = (...remaining: any[]) =>{
    // Returns an array
    console.log(remaining)
}

// could also destructure arrays like

const [first,...remaining] =  arrayHobbies
