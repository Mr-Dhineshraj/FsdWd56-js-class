// function add(a,b){
//     return a+b;

// }

// function sub(a,b){
//     return a-b;
// }

// function multi(a,b){
//     return a*b;

// }
// function divide(a,b){
//     return a/b;
// }

// function calc(a,b,callback){
//     return callback(a,b)

// }

// console.log(calc(10,5,add))



function cb(word){
    console.log(word);

}

function repeatStirng(a,callback){
    console.log(a);
    callback(a);
}

repeatStirng("Hello",cb)