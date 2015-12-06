Moviedb.controller('EditMovie', function($scope, FirebaseService, $location, $routeParams) {
  FirebaseService.getMovie($routeParams.key, function(movie) {
    $scope.movie = movie;
  });

  $scope.editMovie = function() {
    if($scope.movie.title.length != 0
      && $scope.movie.director.length != 0
      && $scope.movie.description.length != 0
      && $scope.movie.released.length != 0) {
        FirebaseService.editMovie($scope.movie);
        var loc = $location;
        loc.path("/movies/" + $routeParams.key);
    }
  };
});
