const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('localhost:3000');
    await driver.wait(until.titleIs('Top 10 crackers yo'), 1000);
    console.log("success at the desk");
      
    await driver.wait(until.elementLocated(By.name('username')), 20000);   
    await driver.findElement(By.name('username')).sendKeys('haha yeet', Key.RETURN);
    await driver.wait(until.titleIs('Top 10 crackes yo'), 4000);
    

  } finally {
    await driver.quit();
  }
})();