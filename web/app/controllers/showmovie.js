Moviedb.controller('ShowMovie', function($scope, $routeParams, FirebaseService) {
  FirebaseService.getMovie($routeParams.key, function(movie) {
    $scope.movie = movie;
  });
});
