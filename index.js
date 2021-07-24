import { Builder, By, Key, until } from 'selenium-webdriver'


(async function example() {
    var loginlink = "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_AccountFlyout_signout%26signIn%3D1%26useRedirectOnSuccess%3D1"
    var product_link = "https://www.amazon.com/dp/B07X6WGVXJ/ref=twister_B07BKVF1QS?_encoding=UTF8&th=1&psc=1"
    var username = "Ibrahim_3adel@outlook.com"
    var userpassword = "IbrahimAdel"

    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // check product stock
        driver.get(product_link)

        var offers = await driver.findElement(By.xpath(
            "//*[@id='availability']/span[contains(text(),'In stock on')] | //*[@id='availability']/span[contains(text(),'Currently unavailable.')]"
        ))
        if (offers) console.log("Out Of Stock")


        driver.get(loginlink)
        var get_timeout = (timeout = 10) => {
            return Date.now() + timeout
        }


        async function wait_for_page_change(page_title, timeout = 3) {
            var time_to_end = get_timeout(timeout = timeout)
            while (Date.now() < time_to_end && (
                driver.title == page_title || !driver.title)) {
                if (driver.title != page_title) return true
                else return False
            }
        }
        console.log("Email")
        var email_field = ""
        var password_field = ""
        var timeout = get_timeout()
        while (true) {
            try {
                email_field = browser.findElement(By_xpath('//*[@id="ap_email"]'))
                break
            }
            catch (error) {
                try {
                    password_field = browser.findElement(By_xpath(
                        '//*[@id="ap_password"]'
                    ))
                    break;
                }
                catch (error) {

                }
            }
            if (Date.now() > timeout)
                break

            if (email_field) {
                try { email_field.sendKeys(username + Keys.RETURN) }
                catch (error) {
                    console.log("Email not needed.")
                }
            }
            else {
                console.log("Email not needed.")
            }
        }
    }
    finally {
        //   await driver.quit();
    }
})();