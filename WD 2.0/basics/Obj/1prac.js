//OBJCETS **

//SINGLETON OBJ -> using constructor( Object.create)


//Object Literals 
const mySym=Symbol("Key1") //symbol creation and addition in object as a key

const JsUser={
    name:"Amit",
    [mySym]:"myKey1",
    age:18,
    Location:"Haryana"
}

console.log(JsUser.age); // mostly use dot approach
console.log(JsUser["age"]); //more preferred way to escape from symbol DT error and also key type problem
console.log(JsUser[mySym]) //symbol access