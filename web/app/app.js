var Moviedb = angular.module('Moviedb', ['ngRoute', 'firebase']);

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
    .otherwise({
      redirectTo: '/'
    });
});
