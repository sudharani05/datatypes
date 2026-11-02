class Browser {
    browsertype(){
        console.log('success browsertype')
   }
browserversion(){
        console.log('browser launched successfully')
    }
 }
     class chrome extends Browser{
        launchBrowser(){
            console.log('chrome browser launched successfully')
        }
     }
     class Edge extends Browser{
        launchbrowser(){
            console.log('Edge browser launched successfully')
        }
     }
let chromeobj = new chrome()
chromeobj.browsertype()
chromeobj.browserversion()
chromeobj.launchBrowser()

let Edgeobj = new Edge()
Edgeobj.browsertype()
Edgeobj.browserversion()
Edgeobj.launchbrowser()

