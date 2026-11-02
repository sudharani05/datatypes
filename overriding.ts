class Browser2{
    browserVersion(){
        console.log('launch the browser')
    }
}
class chrome1 extends Browser2{
    
        browserVersion(){
        console.log('chrome1 overrides the browserversion')
    }
}
const obj= new chrome1()
obj.browserVersion()

