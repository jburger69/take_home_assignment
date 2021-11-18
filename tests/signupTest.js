const { Builder, By } = require ("selenium-webdriver");

async function signup() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email")

    await driver.findElement(By.id("user_name")).sendKeys("Joshua Burger");
    await driver.findElement(By.id("user_email")).sendKeys("josh11@aol.com");
    await driver.findElement(By.id("password")).sendKeys("Teachable")
    await driver.findElement(By.id("allow_marketing_emails")).click();
    await driver.findElement(By.name("commit")).click();


}

signup()