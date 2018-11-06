const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        await driver.get('localhost:3000');  
        await driver.wait(until.titleIs('Top 10 crackers yo'), 1000);
        console.log("Test case 1 passed");
    } catch(err){
        console.log("Test case 1 failed with error: ", err);
    }
    
    try{
        await driver.wait(until.elementLocated(By.id('inputCracker')), 20000);  
        await driver.findElement(By.id('inputCracker')).sendKeys('cheese its grooves', Key.RETURN);
        console.log("Test case 2 passed");
    } catch(err){
        console.log("Test case 2 failed with error: ", err);
    }
    
    try{
        await driver.findElement(By.id("submitButton"));
        await driver.executeScript("arguments[0].click();", driver.findElement(By.id("submitButton")));
        console.log("Test case 3 passed");
    } catch(err){
        console.log("Test case 3 failed with error: ", err);
    }
    
    try{
        await driver.findElement(By.name("cheeseLink")).click();
        await driver.wait(until.titleIs("Cheese: The bee's knees"), 1000);
        console.log("Test case 4 passed");
    } catch(err){
        console.log("Test case 4 failed with error: ", err);
    }
          
    try{
        await driver.findElement(By.name("yesButton")).click();
        console.log("Test case 5 passed");
    } catch(err){
        console.log("Test case 5 failed with error: ", err);
    }
    
    try{
        await driver.findElement(By.name("homeLink")).click();
        await driver.wait(until.titleIs('Top 10 crackers yo'), 1000);
        console.log("Test case 6 passed");
    } catch(err){
        console.log("Test case 6 failed with error: ", err);
    }
    
    finally {
    await driver.quit();
  }
})();