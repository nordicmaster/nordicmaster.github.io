var myApp=angular.module('myApp');
myApp.controller('lastfmController', function($scope) {

    $scope.lastfmJson=[];
    
    function ajax(url) {
        //console.log("aja X");
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        };
        xhr.onerror = reject;
        xhr.open('GET', url);
        xhr.send();
      });
    }
    
    $scope.getLastFm = function () {
        ajax("https://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=nordic+master&api_key=57ee3318536b23ee81d6b27e36997cde&format=json")
          .then(function(result) {
            var xres = JSON.parse(result);
            $scope.lastfmJson = xres.toptracks.track;
            console.log($scope.lastfmJson);
          })
          .catch(function() {
            console.log("rerro2r-0lastfm");
          });
    }
    
    $scope.renew=function(item) {}
            
    init = function() {
        $scope.getLastFm();
    }

    init();
});
