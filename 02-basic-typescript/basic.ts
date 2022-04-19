const add = (n1:number,n2:number,showResult:boolean,result:string)=>{
    let resultString = n1 + n2
    if(showResult){
        console.log(result + resultString)
    }
    else{
        return result;
    }
   

}
let number1 = 4
let number2 = 2.8
let printResult = true
let resultPhrase= 'Result Phrase: '
const result =  add(number1,number2,printResult,resultPhrase)
console.log(result)

// 