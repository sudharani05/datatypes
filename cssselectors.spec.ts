import { test, expect } from "@playwright/test";

test ('learn how to use css selectors',async({page})=>{
    //Navigate to the URL: http://leaftaps.com/opentaps/control/main
    await page.goto('https://leaftaps.com/opentaps/control/main')
    //Enter the username as democsr2.
    await page.locator('#username').fill('democsr');
    //Enter the password
    await page.locator('[id="password"]').fill('crmsfa');
    //Click the Login button
    await page.locator('.decorativeSubmit').click();
    //Click CRM/SFA.
    await page.locator('#label').click();
    //Click Leads.
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.waitForTimeout(3000);
    //Click Create Lead.
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
    //Fill the Company Name
    await page.locator('#createLeadForm_companyName').fill('HCLTech');
    //Fill the First Name.
    await page.locator('[id="createLeadForm_firstName"]').fill('Sudha');
    //Fill the Last Name.
    await page.locator('#createLeadForm_lastName').fill('Paladugu');
    //Fill the Salutation.
    await page.locator('input[name="personalTitle"]').fill('Mrs');
    //Fill the Title.
    await page.locator('[name="generalProfTitle"]').fill('software tester');
    //Fill the Annual Revenue.
    await page.locator('#createLeadForm_annualRevenue').fill('10,00,000');
    //Fill the Department.
    await page.locator('input[id="createLeadForm_departmentName"]').fill('QA');
    //Locate the Source dropdown using a CSS selector.
    await page.locator('[id="createLeadForm_dataSourceId"]').click();
    //Iterate through all options in the Source dropdown.
    let sourceDropdown = page.locator("select[name='dataSourceId']");
    let options = await sourceDropdown.locator("option").all();
    // let array = [1,2,3,4,5,6,7,8,9,10,11,12]
    for (let i = 0; i < options.length; i++) {
        console.log(await options[i].textContent());
    }
    //Fill the Phone Number.
   await page.locator('#createLeadForm_primaryPhoneNumber').fill('7889097646');
   //Click the Create Lead button
   await page.locator('[value="Create Lead"]').click();
        
    
        
        
    
})