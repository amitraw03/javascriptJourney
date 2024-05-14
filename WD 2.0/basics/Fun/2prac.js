//This function : for accessing current context 
//variables are too strong can even store the functions

//(*) this : can be used in objects but not able to use in functions for accessing its contents

function fun(){
    let name="Amit"
    console.log(this.name)
}
fun() //undefined as acc to above point

// const chai=function (){
//     let name="Amit"
//     console.log(this.name)
// }
  

//(*) arrow function syntax: ()=>{}  *remoove function keyword and add arrow after ()*
const chai= ()=>{
    let name="Amit"
    console.log(this.name)
}
// chai()

//(*) ways to return in arrow functions
// const addTwo=(n1 ,n2) =>{  //1st way braces present so return
//     return n1+n2
// }

// const addTwo=(n1 ,n2) => n1+n2  //2nd way

const addTwo=(n1 ,n2) => (n1+n2)  //3rd way no braces no return

console.log(addTwo(3,4))

