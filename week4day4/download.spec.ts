import test, { expect } from "@playwright/test";
import path from "path";
import * as fs from "fs";

test('Learn file download',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')
        let downloadRef = page.waitForEvent('download')
        await page.locator('[href="download/Image.PNG"]').click()
          const fDownload = await downloadRef
          fDownload.saveAs(path.join(__dirname,'../../../Data/Image.PNG'))
           expect(fDownload).toBeTruthy()
           expect(fDownload.suggestedFilename()).toContain("Image.PNG")
})