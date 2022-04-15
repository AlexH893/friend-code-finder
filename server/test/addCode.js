/*
 * Author: Alex Haefner
 * Date: 02-12-2022
 * Sources: https://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
 */

describe("friend-code-finder", function () {
  it("should submit a code", function () {
    browser.get("http://localhost:4200/");

    /*
     * Here we are entering in a valid code, then locating the submit btn & clicking
     */
    element(by.id("codeInput")).sendKeys("123456789012");
    browser.sleep(500); //wait 2 seconds
    element(by.id("submitBtn")).click();

    browser.sleep(500);

    /*
     *
     *
     *
     */
    /*
    var taskText = element(
      by.cssContainingText(".taskString", "Task to be moved")
    );
    var currentList = element(by.id("dropCurrent"));
    var doneList = element(by.id("dropDone"));
    expect(taskText.getText()).toEqual("Task to be moved");
    browser.sleep(500);
    // Moving task to current list
    browser.actions().dragAndDrop(taskText, currentList).perform();
    browser.sleep(500);
    // Moving task to done list
    browser.actions().dragAndDrop(taskText, doneList).perform();
    browser.sleep(500);
    element(by.id("signoutBtn")).click();
*/
    /*
     * Ensure the url after signing out
     */
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/");
  });
});
