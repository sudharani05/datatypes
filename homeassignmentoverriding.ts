class  Browser3{
   browserName: string
   browserVersion:string
   constructor(browserName : string, browserVersion : string){
     this.browserName=browserName;
     this.browserVersion=browserVersion;
   }
   openURL():void{
    console.log(`open url in the : ${this.browserName}`)
   }
   closeBrowser():void{
    console.log(`closing the: ${this.browserName}`)
   }
   navigateBack():void{
     console.log(`navigating to the:${this.browserName}`)
   }
}
class Chrome extends Browser3{
    openURL(): void {
        console.log(`opening url in the: ${this.browserName}`)
    }
    openIncognito():void{
        console.log(`open incognito in the:${this.browserName}`)
    }
    clearCache(){
        console.log(`clear the cache in the:${this.browserVersion}`)
    }

}
class Edge1 extends Browser3{
   takeSnap():void{
    console.log(`take a snap in the:${this.browserVersion}`)
   }
   clearCookies():void{
    console.log(`clearing cookies in : ${this.browserVersion}`)
   }
   navigateBack(): void {
       console.log(`navigating back to the:${this.browserName}`)
   }
}
class Safari extends Browser3{
    readerMode():void{
        console.log(`readermode activate in : ${this.browserName}`)
    }
    fullScreenMode():void{
        console.log(`fullscreenmode open in :${this.browserVersion}`)
    }
    closeBrowser(): void {
        console.log(`closebrower in :${this.browserName}`)
    }
}
const Chrome2 = new Chrome("chrome","120")
Chrome2.clearCache()
Chrome2.closeBrowser()
Chrome2.navigateBack()
Chrome2.openIncognito()
Chrome2.openURL()
const Edg = new Edge1("Edge", "125");
console.log(Edg.browserName);
console.log(Edg.browserVersion);
Edg.takeSnap();
Edg.clearCookies();
Edg.navigateBack();
Edg.openURL();
Edg.closeBrowser();
const Saf = new Safari ("safari","15")
Saf.fullScreenMode()
Saf.navigateBack()
Saf.readerMode()
Saf.closeBrowser()
Saf.openURL()






