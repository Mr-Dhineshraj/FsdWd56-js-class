let person={
    names:"Dhienshraj",
    age:29,
    city:"Chennai",

}
//console.log(JSON.stringify(person));


// let jsonString='{"names":"Dhienshraj","age":29,"city":"Chennai"}';

// let jsonObj=JSON.parse(jsonString);

// console.log(jsonObj)

for(let key in person){

    console.log(key,person[key])
}
console.log(Object.keys(person))
console.log(Object.values(person))

for(let i in Object.values(person)){
    console.log(Object.values(person))
}