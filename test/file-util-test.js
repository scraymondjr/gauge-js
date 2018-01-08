var assert = require("chai").assert;
var fileUtil = require("../src/file-util");

describe("File util functions", function () {
  
  it("Should return true when given paths are same windows", function () {
    var path1 = "c:/Users/user_name/test_js/tests/step_implementation.js";
    var path2 = "C:/Users/user_name/test_js/tests/step_implementation.js";
    
    assert.isTrue(fileUtil.isSameFilePath(path1, path2));
  });

  it("Should return true when given paths are with different fileseperator ", function () {
    var path1 = "c:\\Users\\user_name\\test_js\\tests\\step_implementation.js";
    var path2 = "c:/Users/user_name/test_js/tests/step_implementation.js";
    
    assert.isTrue(fileUtil.isSameFilePath(path1, path2));
  });

  it("Should return true when given paths are same on linux ", function () {
    var path1 = "/Users/test_js/tests/Step_implementation.js";
    var path2 = "/Users/test_js/tests/step_implementation.js";
    
    assert.isTrue(fileUtil.isSameFilePath(path1, path2));
  });

  it("Should return false when given paths are not different", function () {
    var path1 = "/Users/test_js/tests/Step_implementation.js";
    var path2 = "/Users/test_js/tests1/step_implementation.js";
    
    assert.isFalse(fileUtil.isSameFilePath(path1, path2));
  });

});
