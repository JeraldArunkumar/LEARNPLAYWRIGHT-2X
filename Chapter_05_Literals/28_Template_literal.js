let firstname='Jerald'; // String literal
let lastname='Arun'; // String literal
let fullname=`Hi${firstname} ${lastname}`;
console.log(fullname); // "Hi Jerald undefined"


let env='staging';
env='UAT';
const userId=12345;
let apiUrl=`https://${env}.api.example.com/users/${userId}`;
console.log(apiUrl); // "https://UAT.api.example.com/users/12345"

//playwright
const rowIndex=1;
const columnname='email address';
await.page.locator(`[data-row="${rowIndex}"][data-column="${columnname}"]`).click();

//Logs
const testname='Login Test';
const status='passed';
const duration=2.3;
console.log(`Test: ${testname} - Status: ${status} - Duration: ${duration} seconds`);