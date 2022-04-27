
// function return type
let add = (n1:number,n2:number):string => {
    return n1.toString() + n2.toString()
}

// Trying to use void in a return type of a function

const addVoid = (n1:number,n2:number):void =>{
    console.log(n1+n2)
}

// in TS if function has a return type of undefined then it has to return something

// function types 
const addFunction = (x:string)=>{
    return x;
}


let addFunctionCopy:(x:string)=>string;

addFunctionCopy =  addFunction


// function types && Callbacks

const callBackAdd = (x:number,y:number,cb:()=>string):number=>{
    return x + y
}
// second to note 
let callBackAddCopy:(x:number,y:number,cb:()=>string)=>number

callBackAddCopy = callBackAdd