// Unknown Type 
var userInput;
var main;
userInput = "Anything";
// But it can't be equal to some thing of type except there is a type check
// main = userInput
// Never type 
// used for errors and infinite loop
var generateError = function (message, code) {
    throw { message: message, statusCode: code };
};
