//AngularJS
var myApp=angular.module('myApp');
myApp.controller('gtpController', function($scope) {
    $scope.sortparam='-ID';
    $scope.gtp={
        text: 'tab1',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.textJson={
        text: '',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.changeClass = function (e) {         
        $scope.gtp.text = 'newtab';
    }
    function assignJson(obj) {
        console.log("assign " + obj[1]);
        $scope.textJson = obj;
    }
    $scope.fetchJson = function () {
        //$scope.textJson.text = JSON.parse("https://nordicmaster.github.io/table_items.json");
        //'<a href="https://nordicmaster.github.io/table_items.json">json</a>';
        console.log("fetchJson");
        var xmlhttp = new XMLHttpRequest();
        var myObj;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            myObj = JSON.parse(this.responseText);            
            assignJson(myObj);            
          }
        };
        xmlhttp.open("GET", "https://nordicmaster.github.io/table_items.json", true);
        xmlhttp.send();
    }
    $scope.sendJson = function () {
        console.log("sendJson");
        var xmlhttp = new XMLHttpRequest();
        var myObj;
        var theJSON = JSON.stringify($scope.textJson);
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
          }
        };
        xmlhttp.open("POST", "https://nordicmaster.github.io/table_items.json", true);
        xmlhttp.send();
    }
    init = function() {
        $scope.fetchJson();
    }
    init();
});
