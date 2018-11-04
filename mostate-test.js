const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.missouristate.edu');
        await driver.findElement(By.name('q')).sendKeys('activities', Key.RETURN);
        await driver.wait(until.titleIs('activities - Web Search - Missouri State University'), 1000);
        console.log("Test Case 1 passed");
    } catch(err){
        console.log("Test Case 1 failed with error: ", err);
    }
    
    try{
        await driver.findElement(By.linkText('Log in')).click();
        await driver.findElement(By.linkText('My Missouri State')).click();
        await driver.wait(until.titleIs('Bear Pass Login - Missouri State University'), 1000);
        await driver.findElement(By.id('username')).sendKeys('1234', Key.RETURN);
        await driver.wait(until.titleIs('Bear Pass Login - Missouri State University'), 1000);
        console.log("Test Case 2 passed");
    } catch(err){
        console.log("Test Case 2 failed with error: ", err);
    }
      
    finally {
        await driver.quit();
  }
})();