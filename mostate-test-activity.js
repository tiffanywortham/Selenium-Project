const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.missouristate.edu');
    try{
        
        /* Here, write a test case that will enter text into the search bar on MSU's homepage,
        and ensure that it navigates to the correct page. Check this by checking that the title
        of the page it navigates to is '*your search* - Web Search - Missouri State University'
        */
        
        console.log("Test Case 1 passed");
    } catch(err){
        console.log("Test Case 1 failed with error: ", err);
    }
    
    try{
        
        /* Here, write a test case which navigates to the My Missouri State Login page, inputs
        an incorrect username, and ensures that the user is not allowed to advance further.
        To check this, check that the title of the page remains the same.
        
        HINT:The first link you'll have to click is given for you. You'll have to click one more
        to navigate to the login page.
        
        ANOTHER HINT: Also, you'll want to check the title of the page before you input a username as well,
        or the page may not have loaded completely yet.
        */
        
        await driver.findElement(By.linkText('Log in')).click();
        
        console.log("Test Case 2 passed");
    } catch(err){
        console.log("Test Case 2 failed with error: ", err);
    }
      
    finally {
        await driver.quit();
  }
})();