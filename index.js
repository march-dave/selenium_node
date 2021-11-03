// const webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// const driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();

// driver.get('http://www.google.com');

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//     driver.quit();
//   });
// });


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://multiapp.localhost/blue/');
    await driver.findElement(By.name('username')).sendKeys('', Key.TAB);
    await driver.findElement(By.name('password')).sendKeys('', Key.TAB);
    // await driver.findElement(By.css(".btn-primary").sendKeys()
    
    await driver.findElement(By.xpath("//form//div[4]//div//input")).click();
    // await driver.findElement(By.xpath("//div/h1"));
    // await driver.findElement(By.cssSelector("input[type='submit'][value='Login']")).click();
    
    
    //span[contains(text(),'Users')]
    // await driver.wait(until.titleIs('Tasks & Results Dashboard'), 1000);
    // await driver.findElement(By.xpath("span[contains(text(),'Users')]"));
    // await driver.findElement(By.xpath("//h1[contains(text(),'Tasks & Results Dashboard')]"));


    let getHeader = driver.findElement(By.xpath("//h1[contains(text(),'Tasks & Results Dashboard')]"));
    // driver.findElement(By.xpath("//h1[contains(text(),'Tasks & Results Dashboard')]")).then( () =>  {
    //   driver.getTitle().then( (title) => {
    //     console.log(title);
    //   })
    // })
    // driver.sleep(2000);
    
    driver.sleep(2000);
    if (getHeader) {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.sleep(2000);


    // driver.sleep(2000).then(function() {
    //   driver.getTitle().then(function(title) {
    //     // if(title === 'webdriver - Google Search') {
    //     if(title) {
    //       console.log('Test passed');
    //       console.log(title);
    //     } else {
          // console.log('Test failed');
    //     }
    //   });
    // });


  } finally {
    await driver.quit();
  }
})();