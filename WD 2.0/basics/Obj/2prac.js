//singleton/constructor obj creation

const fbUser=new Object()

fbUser.name="Amit"
fbUser.id=3
fbUser.experience=4
// console.log(fbUser)

//(*) just like arr concat , OBj using assign
const obj1={1:"x" , 2: "y"}
const obj2={3:"a" , 4: "b"}
// const obj3=Object.assign({},obj1,obj2); // assign(target,source)
const obj3={...obj1,...obj2}   //spread operator ...
console.log(obj3);

console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));