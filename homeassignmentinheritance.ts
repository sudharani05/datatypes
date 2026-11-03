//import { text } from "node:stream/consumers";

class webComponent{
    selector : string
 constructor(selector : string){
    this.selector = selector;
} 
click(): void {
    console.log(`clickling the message :${this.selector}`);
}  
focus(): void{
    console.log(`focusing the message :${this.selector}`);
}
}
class Button extends webComponent{
    click() : void{
        super.click();
        console.log(`button clicked ${this.selector}`)
    }
}
class Textinput extends webComponent{
    value : string =""
    enterText = (text: string) : void =>{
    this.value = text ;
    console.log(`text entered ${this.value} into ${this.selector}`)
    }
 }
 function testComponents(): void{
    const loginButton = new Button ('.Login')
    const userNameinput = new Textinput ('#username')
    
    loginButton.click()
    loginButton.focus()

    userNameinput.enterText("Sudha");
    userNameinput.focus();

 }
 testComponents();
