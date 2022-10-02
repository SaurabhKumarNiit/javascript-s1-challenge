let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

console.log(typeof(age));

// Provide solution code here for Validating FirstName
if(firstName!=null && typeof(firstName)=='string'){
    console.log("First name match as reqirment")
}
else{
    console.log("First name not match as reqirment")
}

// Provide solution code here for Validating LastName
if(lastName!=null && typeof(lastName)==='string'){
    console.log("Last name match as reqirment")
}
else{
    console.log("Last name not match as reqirment")
}

// Provide solution code here for Validating Age
if(age!=null && typeof(age)=='number' && age>=18 && age<=60){
    console.log("Age match as reqirment")
}
else{
    console.log("Age not match as reqirment")
}

// Provide solution code here for Validating isMarried
if(isMarried===true && typeof(isMarried)=='boolean'){
    console.log("Status Marrid")
}
else{
    console.log("Status Not Marrid")
}

// Provide solution code here for Validating City
if(typeof(city)==='string'){
    console.log("City  match as reqirment")
}
else{
    console.log("City not match as reqirment")
}

// Provide solution code here for Validating State
if(typeof(state)==='string'){
    console.log("State match as reqirment")
}
else{
    console.log("State not match as reqirment")
}
 
// Provide solution code here for Validating Postal Code
if(postalCode!=null && typeof(postalCode)==='string'){
    console.log("Postal code match as reqirment")
}
else{
    console.log("Postal code not match as reqirment")
}
 