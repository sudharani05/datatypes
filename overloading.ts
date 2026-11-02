class textbox{
    fill(text: string) : void
    fill(text: string, locator: string) : void

    fill(text: string,locator?: string){
        if(locator){
            console.log(`textbox having ${text} in ${locator}`);
        }else{
            console.log('fill the ',text);
        }
    }
}
let txt =new textbox()
txt.fill('sudha')
txt.fill('sudha','#username')