Moviedb.controller('Users', function($scope, $location, authService) {
  $scope.login = function() {
    authService.login($scope.email, $scope.password)
    .then(function() {
      $location.path('/movies');
    })
    .catch(function() {
      $scope.message = 'Väärä sähköpostiosoite tai salasana!';
    });
  };

  $scope.register = function() {
    authService.createUser($scope.newEmail, $scope.newPassword)
  };
});
