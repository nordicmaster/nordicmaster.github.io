//AngularJS
var myApp=angular.module('myApp');
myApp.controller('statsController', function($scope) {
    $scope.totalgtp=0
    $scope.totaltext=0
    $scope.totalrec=0
    $scope.totalplayed=0
    $scope.totalrecorded=0
    $scope.textJson=[]
    $scope.coversJson=[];

    function assignJson(obj) {
        $scope.textJson = obj;
        $scope.textJson.forEach(addtext);
        $scope.textJson.forEach(totalcount);
    }
    function totalcount(item,index) {
        if (item.finished==true)
            $scope.totalgtp++;
        if (item.lyric_finished==true)
            $scope.totaltext++;
        if (item.recorded==true)
            $scope.totalrec++;
    }
    function totalcovercount(item,index) {
        $scope.totalplayed++;
        if (item.recorded==true)
            $scope.totalrecorded++;
    }
    
    async function init2() {
        const response = await fetch('https://nordicmaster.github.io/table_items.json');
        const myJson = await response.json();
        assignJson(myJson);
    }
    init2();
});
