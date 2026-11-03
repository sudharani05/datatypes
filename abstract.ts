abstract class Loginpage{
    fill():void{
        console.log('filling the username and password')
    }
    clear():void{
        console.log('clearing the username and password')
    }
    abstract locator() : string
    abstract frame(): string
}
class LoginpageActions extends Loginpage{
    locator():string{
return "username locator"
    }
    frame():string{
return "Login frame"
    }
}
const Loginobj = new LoginpageActions()
Loginobj.clear()
Loginobj.fill()
console.log(Loginobj.frame());
console.log(Loginobj.locator());
