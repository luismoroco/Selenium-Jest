const {Builder, By} = require('selenium-webdriver');

async function FxPercentDiff(Data1, Data2) {
    
    // Obtenemos la web
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://www.calculator.net/percent-calculator.html');

    // Buscamos los datos y seteamos 
    await driver.findElement(By.name('c3par1')).sendKeys(Data1);
    await driver.findElement(By.name('c3par2')).sendKeys(Data2);
    
    // Click
    await driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[5]/tbody/tr[3]/td/input[2]')).click();

    // Obtenermos el resultado
    let res = await driver.findElement(By.xpath('/html/body/div[3]/div[1]/p[4]/font/b')).getText();

    // Restablecer los valores inciales, cerrar y retornar
    await driver.navigate().to("https://www.calculator.net/percent-calculator.html");
    await driver.close();

    return String(res);
}

module.exports = FxPercentDiff;