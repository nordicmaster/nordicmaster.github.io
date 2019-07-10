//AngularJS
var myApp=angular.module('myApp');
myApp.controller('gtpController', function($scope) {
    //$scope.sortparam='-rate';
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
    $scope.$on('$viewContentLoaded', function() {
        console.log("view content loaded");
        $scope.fetchJson();
    });
    $scope.$on('$stateChangeSuccess', function () {
        console.log("state change success");
        $scope.fetchJson();
    });
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
        var str = "";
        var myObj;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            myObj = JSON.parse(this.responseText);            
            str = myObj[0].name;
            console.log("str now = "+ str);
            assignJson(myObj);            
          }
        };
        xmlhttp.open("GET", "https://nordicmaster.github.io/table_items.json", true);
        xmlhttp.send();
        console.log("str = "+str);
        //console.log(myObj[0].name);
        //$scope.textJson = myObj;
    }
    var init = function () {
        console.log("init");
        $scope.fetchJson();
    };
    // and fire it after definition
    init();
});
