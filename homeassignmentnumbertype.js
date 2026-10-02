function functionName(number){
    if (number > 0) {
        return "positive";
        
        
    }
    else if (number < 0) {
        return "negative";
        
        
    }
    else {
        return "zero";
        
    }
}
console.log(functionName(0));

function isOddOrEven(number){
    if (number % 2 === 0) {
        return "Even";
        
    }
    else{
        return "Odd"
    }
}
console.log(isOddOrEven(80));

let number = 10;
 for (let i = 10; i >= 1; --i) {
    const square = i*i;
    console.log(square);
    
}
    
 


