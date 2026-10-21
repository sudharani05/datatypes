import test, { expect } from "@playwright/test";

test('learn frame locators',async({page})=>{

    await page.goto('https://www.leafground.com/frame.xhtml')
     const parentframe = page.frameLocator('//iframe[@src="page.xhtml"]')
     const childframe = parentframe.frameLocator('iframe[id="frame2"]')
      await childframe.locator('#Click').click();
      const afterClick = await childframe.locator('#click').innerText()
      console.log(afterClick);
      await expect(childframe.locator('#Click')).toContainText('Hurray!')
})




