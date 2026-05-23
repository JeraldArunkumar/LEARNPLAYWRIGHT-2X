//nested if else 

    let islogedIn=true;
    let userRole="admin";

    if(islogedIn){
        if(userRole==="admin"){
            console.log("Welcome, admin!");
        }else if (userRole==="user"){
            console.log("Welcome, user!");
        }else if (userRole==="editor"){
            console.log("Welcome, editor!");
        }else{
            console.log("Welcome, guest!");
        }   

   }else{
        console.log("Please log in first.");
    }