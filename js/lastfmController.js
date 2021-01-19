var myApp=angular.module('myApp');
myApp.controller('lastfmController', function($scope) {

    $scope.lastfmJson=[];
    $scope.listeners=0;
    $scope.totalscrobbles=0;
    
    const init = async() => {
        const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=nordic+master&api_key=57ee3318536b23ee81d6b27e36997cde&format=json");
        var xres = await response.json();
        $scope.lastfmJson = Array.from(xres.toptracks.track);
        const responseInfo = await fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=nordic+master&api_key=57ee3318536b23ee81d6b27e36997cde&format=json");
        var xresInfo = await responseInfo.json();
        //console.log(xresInfo);
        $scope.listeners = xresInfo.artist.stats.listeners;
        $scope.totalscrobbles = xresInfo.artist.stats.playcount;
        $scope.$apply(function () {
          ;
        });     
    }

    init();
});
