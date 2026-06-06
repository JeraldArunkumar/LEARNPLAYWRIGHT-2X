const user = {
    name: 'John',
    age: 30,
    email:'abc@example.com'
}

//object destructuring
const {name, age} = user;
console.log(name) //John
console.log(age) //30  

//object destructuring with renaming
const {name: userName, age: userAge} = user;
console.log(userName) //John
console.log(userAge) //30

//default values in object destructuring
const {country = 'USA'} = user;
console.log(country) //USA - because the country property does not exist in the user object, it takes the default value of 'USA'
console.log(user) //{name: 'John', age: 30, email: '
//object within an object
const user  = {
    name: 'John',
    age: 30,    
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
}
const {address: {street, city, country}} = user;
console.log(street) //123 Main St
console.log(city) //New York
console.log(country) //USA