const sayName = (name,cb,desg) => {
    console.log('running some code');
    console.log('running some code');
    console.log('running some code');
    console.log('running some code');
    console.log(`My name is ${name}`);
    cb(name,desg);
}

function callback(name,designation){
    console.log('My callback function');
    console.log(`${name}'s designation is ${designation}`);
}
const designation = 'DEV';
sayName('Rajan Brahma',callback,designation);