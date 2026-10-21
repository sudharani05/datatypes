import test, { expect } from "@playwright/test";


test ('learn alert and frmae interactions',async({page})=>{
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
await page.on('dialog',async(alert)=>{
    const message = alert.message()
    console.log(message);

const alertType = alert.type()
console.log('alert.type');

if (alertType === "confirm") {
    alert.accept();
    
}
})
  const childframe = await page.frameLocator('#iframeResult')
  await childframe.getByRole('button',{name : 'Try it'}).click();

  await expect(childframe.locator('#demo')).toHaveText('You pressed OK!');



})

