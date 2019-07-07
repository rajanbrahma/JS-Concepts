const p = new Promise((resolve,reject) => {
    //Kick off some Async work.
    setTimeout(() => {
        (Math.floor(Math.random() * 10) <= 4) ? reject(new Error(`Rejected value`)) : resolve(`Resolved value`);
    },2000);
});

    p
    .then(result => console.log('Result : ',result))
    .catch(err => console.log('Error : ',err));
