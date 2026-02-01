/*
    2>1
    2>=1
    2<1
    2==1
    2!=1

    gives true or false
*/

// but what if they are different data types 

console.log("2" > 1)
console.log("01"<2)

// js auto convers 

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >=0). avoid these types of conversions because they are very unpredictable

// in javascript == & === are different from >= etc things

//=== is strict check : checks value and datatype 

console.log("2"===2) // false
console.log(null===0) // false