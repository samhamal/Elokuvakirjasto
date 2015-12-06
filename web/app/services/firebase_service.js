Moviedb.service('FirebaseService', function($firebaseArray){
  var moviesRef = new Firebase('https://brilliant-fire-3360.firebaseio.com/movies');
  var movies = $firebaseArray(moviesRef);

  this.getMovies = function() {
    return movies;
  };

  this.addMovie = function(movie) {
    movies.$add(movie);
  };

  this.removeMovie = function(movie) {
    movies.$remove(movie);
  };

  this.editMovie = function(movie) {
    movies.$save(movie);
  };

  this.getMovie = function(key, done) {
    movies.$loaded(function() {
      done(movies.$getRecord(key));
    });
  };
});
