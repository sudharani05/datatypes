import { test, expect } from '@playwright/test';

test('test to handle the alrets', async ({page})=>{
    page.on('dialog',async(alert)=>{

          

        const message =alert.message()
        console.log(message);

        const alertType = alert.type() //Returns dialog's type, can be one of alert, beforeunload, confirm or prompt.
        console.log(alertType);

        if (alertType  === "Prompt") {
             alert.accept("playwright");
        }

    

    })
//Launch the URL
    await page.goto('https://www.leafground.com/alert.xhtml')
//Click on Prompt Dialog.
    await page.locator('(//span[text()="Show"])[5]').click();
//Switch to the JavaScript prompt alert.
})

