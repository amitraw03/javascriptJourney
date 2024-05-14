//Functions with basics like passing argu and parameters and return type already have idea
//FUNC with Objs AND Arrays :(below)

//(*) using rest opeartor ... to claculate for unknown the arg numbers during runtime
function calCartPrice(...num1){
    return num1
}
// console.log(calCartPrice(3,300,5000,10))


//(*) Passing Objs in Functions

function details(objectA){
    console.log(`My username is ${objectA.username} and my age is ${objectA.age}`)
}
const user={
    username:"Amit",
    age:20
}
// details(user) //1 way and 1 below way to call

// details({
//     username:"Amit",
//     age:20
// })

//(*) passing arr in Func
function marks(arrGet){
    console.log(arrGet[2])
}
marks([30,22,99,70,60])