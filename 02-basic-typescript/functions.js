"use strict";
// function return type
let add = (n1, n2) => {
    return n1.toString() + n2.toString();
};
// Trying to use void in a return type of a function
const addVoid = (n1, n2) => {
    console.log(n1 + n2);
};
// in TS if function has a return type of undefined then it has to return something
// function types 
const addFunction = (x) => {
    return x;
};
let addFunctionCopy;
addFunctionCopy = addFunction;
// function types && Callbacks
const callBackAdd = (x, y, cb) => {
    return x + y;
};
// second to note 
let callBackAddCopy;
callBackAddCopy = callBackAdd;
