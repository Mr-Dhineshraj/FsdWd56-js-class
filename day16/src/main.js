let Array=require("./index");

let numbers=new Array();

numbers.add(3);
numbers.add(5);
numbers.add(7);


numbers.forEach((value)=>{
  console.log(value)
})


numbers.map(value=>{

    if(value%2==0){
        console.log(`print the even num : ${value}`)
    }else{
        console.log("not a number")
    }
})


console.log(numbers.toArray())