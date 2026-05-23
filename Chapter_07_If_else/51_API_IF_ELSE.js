let APIresponse=200;
if (APIresponse===200){
    console.log("Success: Data retrieved successfully.");
}else if (APIresponse===404){
    console.log("Error: Resource not found.");
}else if (APIresponse===500){
    console.log("Error: Internal server error.");
}else{
    console.log("Error: Unexpected response code.");
}   