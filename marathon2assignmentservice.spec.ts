import test, { expect } from "@playwright/test";
import { drainableProtocol } from "node:stream/iter";
test('Search Product and Add to Cart in Service Now',async({page})=>{
    page.goto('https://dev330545.service-now.com')
    await page.locator('#user_name').fill('Admin')
    await page.locator('#user_password').fill('TkA5z3JBzp//')
    await page.getByRole('button',{ name: 'Log in' }).click()
    await page.goto('https://dev330545.service-now.com/now/nav/ui/home')
    await page.getByRole('menuitem',{name : 'All'}).click()
    await page.getByLabel('Service Catalog 3 of 23').click()
    const frame = page.frameLocator('[id="gsft_main"]')
    frame.getByLabel('Mobiles. Cell phones to meet your business needs.').click()
    
    await page.waitForTimeout(3000)
    const mobileframe = page.frameLocator('[id="gsft_main"]')
    await mobileframe.getByRole('link',{name: "Apple iPhone 13 pro"}).click()
    console.log('iphone 13 pro catlog selected successfully')
    await frame.locator('label.radio-label').filter({hasText : 'No'}).click()
    await page.waitForTimeout(3000)
    console.log('No')
    const dropdown = frame.locator('[id="IO:ff1f478e9747011021983d1e6253af68"]')
    await dropdown.selectOption({label : "500MB [add $1.00]"})
    console.log('monthly data allowance')
    await frame.locator('label.radio-label').filter({hasText : 'Graphite'}).click()
    await page.waitForTimeout(3000)
    console.log('selected colour successfully')
    await frame.locator('label.radio-label').filter({hasText :'512 GB [add $300.00]'}).click()
    await page.waitForTimeout(3000)
    console.log('print the selected storage')
    await frame.getByRole('button', { name: 'Order Now', exact: true }).click();
    //await page.getByRole('button',{name: "Order Now", exact : true}).check()
     //await page.getByRole('button',{name: "Order Now", exact : true}).click()
    await page.waitForTimeout(3000)
    await frame.getByRole('generic',{ name : "Thank you, your request has been submitted"})
    //await page.waitForTimeout(3000)
    await page.screenshot({path: "Data/screenshot.png",fullPage: true});

    console.log('screenshot successfully')





})