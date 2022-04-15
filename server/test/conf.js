/*
 * Author: Alex Haefner
 * Date: November 10, 2021
 * Descripton: Config file for selenium
 */

exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:12345/wd/hub",
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 2,
  },
  specs: ["addCode.js"],
};
