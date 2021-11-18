const { Builder, By } = require ("selenium-webdriver");

async function login() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://sso.zeachable.com/secure/123/identity/login")

    await driver.findElement(By.id("email")).sendKeys("takehome@test.com");
    await driver.findElement(By.id("password")).sendKeys("Teachable")
    await driver.findElement(By.name("commit")).click();


}

login()