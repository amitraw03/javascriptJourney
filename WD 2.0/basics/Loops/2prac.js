//+++++++++++ for each Loop (*IMP*)+++++++++++++++++
const coding = ["js", "ruby", "java", "python", "cpp"]
//ways to use forEach loop:-

// coding.forEach( function (val){   //1. general function way
//     console.log(val);
// } )

// coding.forEach( (item) => {     //2. arrow function way
//     console.log(item);
// } )

// function printMe(item){   //3.
//     console.log(item);
// }

// coding.forEach(printMe)    //3.calling separate functn way

// coding.forEach( (item, index, arr)=> {     //other para except item
//     console.log(item, index, arr);
// } )

const myCoding = [             //accessing an eg of array of objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )