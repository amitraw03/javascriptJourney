//Array

const myArr=[0,1,2,3,4]
// console.log(myArr);
//(*) shift method for removing elem from first and unshift for inserting eg :- myArr.unshift(3)


// const myNew= myArr.join() // convert arr elem in char types of string

// console.log(myArr);
// console.log(myNew); 

//(*) 2 methods:- slice-> gives us portion of arr and doesnt manipulate main ARR but splice-> does manipulation in main ARR too

//(*) Concatenation of arrays instead of pushing one into another
// const yourArr=["Amit" ,"Anju" ,"Rithua"]
// const all_arr= [...myArr,...yourArr] //Spread way 
// console.log(all_arr);

//(*) making array by giving i/p
console.log(Array.from("Amit"))
console.log(Array.from({name:"Amit"}))  //interesting case* make array from key pair(name) or from val pair(Amit)

let x=3
let y=9
let z=30
console.log(Array.of(x,y,z))
