const user={
    name:"John",
    age:30,
    iq:120
}
console.log(user);
console.log(user.iq);
console.log(user["name"])

//dynamically accessing the properties of an object using a variable
let property="age"
console.log(user[property]) //30
//adding or modifying properties of an object
user.name="Jerald"
user.age=31;

console.log(user) //{name: 'Jerald', age: 31, iq: 120}