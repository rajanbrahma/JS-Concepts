//Global Scope

const name = 'Rajan';
const LastName = 'Brahma';
function getAttr(){
    getName();
    function getName(){
        const name = 'Atasi';
        console.log(`Name is ${name}`);
        function getLastName(){
            console.log(`Name is ${LastName}`); 
            //LastName variable in getLastName func ? -> No. 
            //Next, LastName variable in getName func ? -> No. 
            //Next, LastName variable in getAttr func ? -> No. 
            //Next, LastName variable in Global scope ? -> Yes. 
        }
        getLastName();
    }
    var name = 'Niv';
    console.log(`getAttr : Name is ${name}`); //It just finds name in current scope so o/p is Niv
}

console.log(`outside : Name is ${name}`); //Not going to check for name variable inside function (obviously!)
getAttr();

//Function Scope

function myFunc(){
    const age = 26;

    console.log(`Age is : ${age}`); //Can access variable since age is in function scope
}
console.log(`Outside : Age is : ${age}`); //Cannout access variable which is functionally scoped