const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('localhost:3000');
    //await driver.findElement(By.id('yee'))//.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('Top 10 crackers yo'), 1000);
    console.log("success at the desk");
  } finally {
    await driver.quit();
  }
})();
