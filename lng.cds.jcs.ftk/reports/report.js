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
  "duration": 20396999274,
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
  "duration": 245656840,
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
  "duration": 3624619808,
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
  "duration": 223575810,
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
  "duration": 333131746,
  "status": "passed"
});
});