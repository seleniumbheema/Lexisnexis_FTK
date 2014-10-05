$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pack/ftk/FTK_JCS.feature");
formatter.feature({
  "line": 1,
  "name": "FKT testing in PRODUCTON",
  "description": "In order to check whether all capabilities are working or not\r\nI want to add DPSI",
  "id": "fkt-testing-in-producton",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check FTK capabilites",
  "description": "",
  "id": "fkt-testing-in-producton;check-ftk-capabilites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I go to \"LoginURl\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on \"Addaccount\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"username\" as \"adminuser\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"password\" as \"adminpass\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clickon \"signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Sign in is \"button\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURl",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "FTK_Cap.I_go_to_url(String,String)"
});
formatter.result({
  "duration": 17559603944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Addaccount",
      "offset": 10
    }
  ],
  "location": "FTK_Cap.Addacct(String)"
});
formatter.result({
  "duration": 181741331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "adminuser",
      "offset": 23
    }
  ],
  "location": "FTK_Cap.user_pass(String,String)"
});
formatter.result({
  "duration": 3507619777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "adminpass",
      "offset": 23
    }
  ],
  "location": "FTK_Cap.user_pass(String,String)"
});
formatter.result({
  "duration": 419106953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 9
    }
  ],
  "location": "FTK_Cap.sign_in(String)"
});
formatter.result({
  "duration": 562510731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "button",
      "offset": 12
    }
  ],
  "location": "FTK_Cap.result(String)"
});
formatter.result({
  "duration": 19215216533,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[button]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pack.ftk.FTK_Cap.result(FTK_Cap.java:56)\r\n\tat ✽.And Sign in is \"button\"(pack/ftk/FTK_JCS.feature:11)\r\n",
  "status": "failed"
});
});