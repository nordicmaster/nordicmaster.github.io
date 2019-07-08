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
    $scope.changeClass = function (e) {         
        $scope.gtp.text = 'newtab';
    }
    $scope.fetchJson = function (e) {
        //$scope.textJson.text = JSON.parse("https://nordicmaster.github.io/table_items.json");
        //'<a href="https://nordicmaster.github.io/table_items.json">json</a>';
        var xmlhttp = new XMLHttpRequest();
        var str = "";
        var myObj;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            myObj = JSON.parse(this.responseText);            
            str = myObj.arr[0].name;
          }
        };
        xmlhttp.open("GET", "https://nordicmaster.github.io/table_items.json", true);
        xmlhttp.send();
        console.log(myObj.arr[1].name);
        console.log("str = "+str);
        $scope.textJson = myObj;
    }
});
