var myApp=angular.module('myApp');
myApp.controller('lastfmController', function($scope) {

    $scope.lastfmJson=[];
    
    async function init() {
        const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=nordic+master&api_key=57ee3318536b23ee81d6b27e36997cde&format=json");
        var xres = await response.json();
        $scope.lastfmJson = Array.from(xres.toptracks.track);
        $scope.$apply(function () {
          ;
        });     
    }

    init();
});
