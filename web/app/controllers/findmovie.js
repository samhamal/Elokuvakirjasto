Moviedb.controller('FindMovie', function($scope, omdbService) {
  $scope.movies = [];
  $scope.searchDone = false;
  $scope.notFound = false;

  $scope.findMovie = function() {
    omdbService.findMovie($scope.title, $scope.released).success(function(movies) {
      $scope.movies = movies;
      $scope.searchDone = true;
      if(!$scope.movies.Search) {
        $scope.notFound = true;
      } else {
        $scope.notFound = false;
      }
    });
  };
});
