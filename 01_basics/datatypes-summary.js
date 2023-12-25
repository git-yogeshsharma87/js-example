
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(id)  
console.log(anotherId);


//********* Memory types */

let email = "yogeshcse@gmail.com"
let email1 = email;
 email1 = "asf@asfdsad.com"
 console.log(email);
 console.log(email1);

 let details = {
    name: "yogesh",
    age: 26

 }

 let newDetails = details;

 newDetails.name = "raja"
 console.log(details);
