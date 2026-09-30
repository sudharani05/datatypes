const browserVersion ="chrome"

function getBrowserVersion(){

    if(browserVersion === "chrome") {

        let browserVersion = "edge"
        console.log("insidefunction", browserVersion);
    }

    console.log("outsideblock",browserVersion);
    
} 
getBrowserVersion();