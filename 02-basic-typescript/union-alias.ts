// setting your custom type
type Combined = string | number;
// literals string
type numberType = 'with-number' | 'without-number'
//  Unions Types


// testing with add function

const combine  = (input1:Combined,input2:Combined,resultType:numberType)=>{
// check of type and then follow it 
let result:Combined;
if(typeof input1 === 'number' && typeof input2==='number'){
     result =  input1 + input2
}
else {
    result= input1.toString() +  input2.toString()
}
    return result;
}

// 
let numberAge = combine(30,20,'with-number')

let stringName = combine("max","Age",'without-number')