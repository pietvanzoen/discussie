// load env variables
require('./_helpers/load-env')();

if (process.env.JASMINE_JUNIT_PATH) {
  const reporters = require('jasmine-reporters');
  const junitReporter = new reporters.JUnitXmlReporter({
    savePath: process.env.JASMINE_JUNIT_PATH,
    consolidateAll: true,
  });
  jasmine.getEnv().addReporter(junitReporter);
}
