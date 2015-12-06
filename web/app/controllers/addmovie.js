Moviedb.controller('AddMovies', function($scope, FirebaseService, $location) {
  $scope.addMovie = function() {
    if($scope.title.length != 0
      && $scope.director.length != 0
      && $scope.description.length != 0
      && $scope.released.length != 0) {
        FirebaseService.addMovie({
          title: $scope.title,
          director: $scope.director,
          released: $scope.released,
          description: $scope.description
        });
        var loc = $location;
        loc.path("/movies");
    }
  };
});
