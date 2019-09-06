// angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
//angular.module('myApp').controller('CarouselDemoCtrl', function ($scope) {

angular.module('caruselApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
  console.log("inside carusel js");
angular.module('caruselApp').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  console.log("inside controller");

  $scope.addSlide = function(ids) {
    console.log("inside addslide");
    slides.push({
      image: '/src/0' + ids + '.png',
      text: ['Rehearsal demo','Cover art','Backstage','Merch sample'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 5; i++) {
    $scope.addSlide(i);
  }
  console.log(slides);
  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
