const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.missouristate.edu');
    try{
        
        await driver.wait(until.elementLocated(By.name('q')), 20000);
        
        /* Here, write a test case that will enter text into the search bar on MSU's homepage,
        and ensure that it navigates to the correct page. Check this by checking that the title
        of the page it navigates to is '*your search* - Web Search - Missouri State University'
        The code provided for you waits until the element found, you do the rest
        */
        
        console.log("Test Case 1 passed");
    } catch(err){
        console.log("Test Case 1 failed with error: ", err);
    }
    
    try{
        
        await driver.wait(until.elementLocated(By.linkText('Log in')), 20000);
        await driver.findElement(By.linkText('Log in')).click();
        
        await driver.wait(until.elementLocated(By.linkText('My Missouri State')), 20000);
        await driver.findElement(By.linkText('My Missouri State')).click();
        await driver.wait(until.titleIs('Bear Pass Login - Missouri State University'), 1000);
        
        /* Here, write a test case which navigates to the My Missouri State Login page, inputs
        an incorrect username, and ensures that the user is not allowed to advance further.
        To check this, check that the title of the page remains the same.
        
        HINT: The provided code already takes you to the login page, so all you'll have to do is
        wait for the username input element to be located, find the element, and send it your input,
        and then check the title of the page.
        */
        
        console.log("Test Case 2 passed");
    } catch(err){
        console.log("Test Case 2 failed with error: ", err);
    }
      
    finally {
        await driver.quit();
  }
})();