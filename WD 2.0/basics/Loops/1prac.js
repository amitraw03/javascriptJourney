//except for ,while and do while loop
//(*)++++++++++++++++++ for of => easily accessible for arrays and maps ++++++++++++++++++++
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
for (const [key, value] of map) {   //good way
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   //will not work
//     console.log(key, ':-', value);
    
// }

//+++++++++++++++(*) for in => easily accessible for objects+++++++++++++
const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    //console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {   //not iterable
//     console.log(key);
// }

