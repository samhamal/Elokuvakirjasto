Moviedb.controller('ListMovies', function($scope, FirebaseService) {
  $scope.movies = FirebaseService.getMovies();
});
