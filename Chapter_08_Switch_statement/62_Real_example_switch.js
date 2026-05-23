//real time example of switch statement based on API response status code
let statusCode = 404;   
switch (statusCode) {
    case 200:
        console.log("OK: The request has succeeded.");  
        break;
    case 201:
        console.log("Created: The request has been fulfilled and resulted in a new resource being created.");   
        break;
    case 400:
        console.log("Bad Request: The server could not understand the request due to invalid syntax.");  
        break;  
    case 401:
        console.log("Unauthorized: The client must authenticate itself to get the requested response.");  
        break;      

    case 403:
        console.log("Forbidden: The client does not have access rights to the content.");  
        break;  

default:
        console.log("Unknown Status Code: The status code is not recognized.");  
        break;
}

