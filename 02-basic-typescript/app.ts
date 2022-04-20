// Unknown Type 

let userInput: unknown;
let main:number;
userInput ="Anything"

// But it can't be equal to some thing of type except there is a type check
// main = userInput


// Never type 

// used for errors and infinite loop

const generateError = (message:number,code:number):never=>{
    throw {message:message, statusCode:code}
}