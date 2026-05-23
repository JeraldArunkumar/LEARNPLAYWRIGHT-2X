let browser="safari s"
switch(browser){
    case "chrome":  
    case "edge":
    case "opera":    
        console.log("Chromium based browser");
        break;
    case "firefox":  
        console.log("Morzilla product browser");
        break;
    case "safari":
        console.log("Safari browser");
        break;
    default:
        console.log("Browser not supported");
}