var Moviedb = angular.module('Moviedb', ['ngRoute', 'firebase']);

Moviedb.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

Moviedb.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListMovies',
      templateUrl: 'app/views/listmovies.html'
    })
    .when('/movies', {
      controller: 'ListMovies',
      templateUrl: 'app/views/listmovies.html'
    })
    .when('/movies/new', {
      controller: 'AddMovies',
      templateUrl: 'app/views/addmovie.html'
    })
    .when('/movies/:key', {
      controller: 'ShowMovie',
      templateUrl: 'app/views/showmovie.html'
    })
    .when('/movies/:key/edit', {
      controller: 'EditMovie',
      templateUrl: 'app/views/editmovie.html'
    })
    .when('/find', {
      controller: 'FindMovie',
      templateUrl: 'app/views/findmovie.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
