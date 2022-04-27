// Write a function that accepts array and reverse the elements of the array. 
// Note: Use of reverse() is forbidden

const reverseArray = (x:any[]):any[] =>{
    let reversedArr:any[] = []
    // loop through the array
    const reversedAns = x.map((data,index)=>{
        if( index < x.length-1 ){
            reversedArr.unshift(data)
        }
       else {
        reversedArr.unshift(data)
        return  reversedArr;
       }
    })   
    const mainReversedstring:any[] = reversedAns[reversedAns.length-1]!
    return mainReversedstring;
}


console.log( reverseArray([1,2,3,4]))
console.log("tur")