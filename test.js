const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('localhost:3000');
    await driver.wait(until.titleIs('Top 10 crackers yo'), 1000);
    console.log("success at the desk");

    await driver.wait(until.elementLocated(By.id('inputCracker')), 20000);  
    await driver.findElement(By.id('inputCracker')).sendKeys('haha yeet', Key.RETURN);
    
    //await driver.wait(until.elementLocated(By.id('submitButton')), 20000);  
    await driver.findElement(By.id("submitButton"));
    await driver.executeScript("arguments[0].click();", driver.findElement(By.id("submitButton")));
      
    await driver.findElement(By.name("cheeseLink")).click();
    await driver.wait(until.titleIs("Cheese: The bee's knees"), 1000);
    
  } finally {
    await driver.quit();
  }
})();