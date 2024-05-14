//IIFE : Immediately invoked Function Expression eg:- named iife , simple iifi etc
// function which immediately execute and to escape from the global scope pollution either its var decalration or anything else
// () () :- 1st parenthesis for declaration and 2nd for calling 
// ; very necesaary to end one IIFI

(function marks(){
    console.log(`DB Connected`);
})() ;

((name)=>{
    console.log(`DB Connected , ${name}`);
})("Amit")