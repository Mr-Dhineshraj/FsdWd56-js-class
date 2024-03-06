new Promise((resolve,reject)=>{
    console.log('Initial');
 resolve();
})

.then(
    ()=>{
    console.log("resolved");
})
.catch(
    ()=>{
    console.log("rejected");
})
.then(()=>{
    console.log("The third loop of execution")
    
})

.then (
    ()=>console.log("The last thing")
)