let promise = new Promise((resolve, reject) => {
    let randomNumber = Math.random() * 5;
    if (randomNumber > 2.5) {
        resolve(randomNumber);
    } else {
        reject(randomNumber);
    }
});

promise.then(
    (result) => console.log("promise was resolved"+result),
    (result) => console.log("promise was rejected"+result)
);
