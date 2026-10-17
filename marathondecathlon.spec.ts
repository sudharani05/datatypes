import test, { expect } from "@playwright/test";
import { TIMEOUT } from "node:dns";

test ('learning the tools',async({page}) => {
    await page.goto('https://www.decathlon.in/'); // Launch browser and navigate to Decathlon website
    await expect(page).toHaveURL('https://www.decathlon.in/'); //Verify URL using Playwright assertions 
    page.locator('//a[@aria-label="Decathlon Home"]'); // Verify the Decathlon homepage is displayed 
    //Verify if search box is enabled
    await expect(page.getByRole('searchbox')).toBeEnabled();
    //Click on the search Box 
    await page.getByRole('searchbox').click();
    //Enter the product name “Shoes” 
    await page.locator('//input[@placeholder="Search for 60+ sports and 6,000+ products"]').fill('shoes');
    //Press Enter or select a suggestion from the dropdown 
    await page.getByRole('button', { name: 'Shoes', exact: true }).click();
    //Verify the product listing page is displayed or Verify search results page title 
    await expect(page).toHaveURL('https://www.decathlon.in/c/shoes-23482');
    //Click on the Sport filter dropdown 
    await page.locator('//span[@data-test-id="title:Sport"]').click();
    //Select Running from the Sport dropdown 
    console.log('Running count:', await page.getByText('Running', { exact: true }).count());
    console.log('Sport filter:', await page.locator('[data-test-id*="sport"]').allTextContents());
    //Click on the Gender filter dropdown 
    await page.locator('//button[contains(@aria-controls,"gender")]').click();
    //await page.getByText('gender:Men', { exact: true });
    //Select women
    //await expect(page.locator('//label[@data-test-id="filter-item-gender_id_en-MEN"]')).toBeVisible();
    await page.locator('//label[@data-test-id="filter-item-gender_id_en-MEN"]').click();
    
    //await page.waitForTimeout(10000);
    //Click on the Size filter dropdown
    await page.getByText("Size").click();
    //Select size UK 8
    await page.locator('[data-test-id="filter-item-indian_size-8"]').click();
    //Click on the Price filter dropdown 
    await page.getByText("Price").click();
    // Select a price range (e.g., ₹1000 – ₹3000)
    await page.locator('[data-test-id="filter-sidebar-desktop:slider-thumb-max"]').dragTo(
    page.locator('[data-test-id="filter-sidebar-desktop:price-slider-track"]'),{ force: true, timeout: 5000 });
    //From the filtered results, click on the first available product
    await page.locator("//a[@aria-label='Decathlon Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black']").click();
    //On the product details page, select Size – UK 10 
    await page.locator('[data-test-id="filter-item-indian_size-8"]').click();
    //Click on Add to cart button and Verify that the product is successfully added to the car
    await page.getByText("//h2[text()='Cart Items']")

    





   

})