import test, { expect } from "@playwright/test";
test('Learn to upload file using input<type=file>',async({page})=>{
    await page.goto('https://www.naukri.com/registration/createAccount')
    await page.locator("[src='//static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg']").click()
    let fUpload = page.locator('input[type="file"]')
    fUpload.setInputFiles('Data/Sudha Rani _Resume.pdf')
    

})