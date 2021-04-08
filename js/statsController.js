var myApp=angular.module('myApp');
myApp.controller('statsController', function($scope) {
    $scope.totalgtp=0;
    $scope.totaltext=0;
    $scope.totalrec=0;
    $scope.mintempo=999;
    $scope.maxtempo=0;
    $scope.avgtempo=0;
    $scope.textJson=[];
    var sumtempos;

    function assignJson(obj) {
        $scope.textJson = obj;
        sumtempos = 0;
        $scope.textJson.forEach(totalcount);
        $scope.avgtempo = Math.round(sumtempos / $scope.textJson.length);
    }
    function totalcount(item,index) {
        if (item.finished==true)
            $scope.totalgtp++;
        if (item.lyric_finished==true)
            $scope.totaltext++;
        if (item.recorded==true)
            $scope.totalrec++;
        if (item.tempo > $scope.maxtempo)
            $scope.maxtempo = item.tempo;
        if (item.tempo < $scope.mintempo)
            $scope.mintempo = item.tempo;
        sumtempos+=item.tempo;
    }
    
    async function init() {
        const response = await fetch('https://nordicmaster.github.io/table_items.json');
        const myJson = await response.json();
        assignJson(myJson);
    }
    
    init();
});
