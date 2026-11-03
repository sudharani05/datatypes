interface pageRules{
    verifyPage():void
}
abstract class basePage{
    waitForPageLoad():void{
        console.log('waiting for page to load')
    }
    getPageTittle():void{
        console.log('getting page title')
    }
}
class LoginPageRequirements extends basePage implements pageRules{
    verifyPage(): void {
        console.log('login page is verified')
    }
    enterUsername():void{
        console.log('entered username')
    }
    enterPassword():void{
        console.log('password entered')
    }
    clickLogin():void{
        console.log('clicked login')
    }
}
class productPageRequirements extends basePage implements pageRules{
    verifyPage(): void {
        console.log('product page is verified')
    }
    searchProduct():void{
        console.log('product has been searched')
    }
    addToCart():void{
        console.log('product added to cart successfully')
    }
}
const login =new LoginPageRequirements()
login.waitForPageLoad()
login.verifyPage()
login.enterUsername()
login.enterPassword()
login.clickLogin()
login.getPageTittle()




