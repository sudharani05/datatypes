import {test, expect, chromium, webkit } from "@playwright/test";

test('learn to launch the browser',async()=>{
   const browser = await chromium.launch({channel : 'msedge', headless : false})
  

   const context = await browser.newContext()
   const page = await context.newPage() 
   await page.goto('https://www.redbus.in/')
   console.log(await page.url())
   await page.waitForTimeout(2000); 
   await expect(page).toHaveURL('https://www.redbus.in/')
    await page.waitForTimeout(2000); 

})

test('learn to launch the browser',async()=>{
const browser = await webkit.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto('https://www.flipkart.com/')
    console.log( page.url());
    await expect(page).toHaveURL('https://www.flipkart.com/')


     }) 



