class APIClient{
     // Overload 1
    sendRequest(endpoint:string) : void;
    //overload 2
    sendRequest(endpoint:string, requestBody : string, requestStatus:boolean) : void;

    // Actual implementation
    sendRequest(endpoint : string, requestBody? : string, requestStatus?:boolean ): void{
        if (requestBody === undefined) {
            console.log(`sending request to ${endpoint}`);
            
        }else{
           console.log(`Endpoint : ${endpoint}`) 
           console.log(`RequestBody : ${requestBody}`)
           console.log(`requeststatus: ${requestStatus}`)
        }
}
}
let obj2 = new APIClient()
obj2.sendRequest("/user")
obj2.sendRequest('/user','sudha',true)



