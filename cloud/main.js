require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define("sendRequest", function(request, response) {
AV.Cloud.httpRequest({
  url: 'http://www.baidu.com/',
  success: function(httpResponse) {
    console.log(httpResponse.text);
    response.success(httpResponse.text);
  },
  error: function(httpResponse) {
    console.error('Request failed with response code ' + httpResponse.status);
  }
});
});
AV.Cloud.define("queryData", function(request, response) {
var file = new AV.File('test111.txt', new Buffer('hello world'));
file.save();
var jobApplication = new AV.Object("JobApplication");
jobApplication.set("applicantName", "dandan");
jobApplication.set("applicantResumeFile", file);
jobApplication.save();
});
