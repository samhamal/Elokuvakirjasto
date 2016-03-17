Moviedb.service('authService', function($firebaseAuth) {
  var firebaseRef = new Firebase('https://brilliant-fire-3360.firebaseio.com/');
  var firebaseAuth = $firebaseAuth(firebaseRef);

  this.login = function(email, password) {
    return firebaseAuth.$authWithPassword({
      email: email,
      password: password
    });
  };

  this.createUser = function(email, password) {
    return firebaseAuth.$createUser({
        email: email,
        password: password
    });
  };

  this.logout = function() {
    firebaseAuth.$unauth;
  };

  this.isLoggedIn = function() {
    return firebaseAuth.$waitForAuth();
  }

  this.getUser = function() {
    return firebaseAuth.$getAuth();
  }
});
