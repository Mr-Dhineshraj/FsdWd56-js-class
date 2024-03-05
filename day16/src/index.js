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



// function cb(word){
//     console.log(word);

// }

// function repeatStirng(a,callback){
//     console.log(a);
//     callback(a);
// }

// repeatStirng("Hello",cb)
/************************************************ */

// class Array{
//     constructor(){
//         this.arr=[];
//     }

//     add(value){
//         this.arr.push(value);
//     }

//     forEach(callback){

//         for(let i=0;i<this.arr.length;i++){
//             callback(this.arr[i]);
//         }

//     }

//     toArray(){
//         return this.arr;
//     }

//     map(callback){

//         let newArray=[];

//         for (let i=0;i<this.arr.length;i++){
//             newArray.push(callback(this.arr[i]));
//         } 

//         return newArray;

//     }

// }

// module.exports=Array;

function firstTask(callback){
    console.log("To start ther first task")
    setTimeout(()=>{
        console.log("10")
        
    },3000);
    callback();
};

function secondTask(callback){
    console.log("This is the second Task");
    setTimeout(()=>{
        console.log("9");
       
    },5000)
    callback();
}

function ThirdTask(callback){
    console.log("this the third task");
    setTimeout(()=>{
        console.log("8");
        
    },7000)
    callback();
}

firstTask(function() {
    secondTask(function(){
        ThirdTask(function() {
            console.log("All the tasks are completed")
        })
    })

})