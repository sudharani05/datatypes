import test, { expect, Page } from "@playwright/test";

test('learn how to handle the single frame',async({page,context})=>{

    await page.goto('https://www.leafground.com/window.xhtml')
    //playwright stats listening for new tab and immediately perform the click action
   const [parentPage] = await Promise.all([context.waitForEvent('page'),
        page.locator('//span[text()="Open"]').click()])
        await page.waitForTimeout(3000);
        
          const count = parentPage.context().pages(); //Returns all open pages in the context
               let dashboard : Page | undefined
               let Window : Page | undefined
           for (let i = 0; i < count.length; i++) {
               await page.waitForLoadState('domcontentloaded')
                const title = await count[i].title()
                console.log(title);
                  if(title==='Dashboard'){
            dashboard = count[i]
        }else if(title==='Window'){
            Window =count[i]
        }
       }
                
            await dashboard?.getByPlaceholder('E-mail Address',{exact : true}).fill('welcome@testleaf.com')
            await dashboard?.getByPlaceholder('Write your message...',{exact : true}).fill('welome to test leaf')
            await page.waitForTimeout(3000)

})