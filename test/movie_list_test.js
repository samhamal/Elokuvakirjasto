describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('Moviedb');

    	FirebaseServiceMock = (function(){
				var movies = [{
					title: "Test movie",
					director: "Test director",
					description: "Test",
					released: "1999"
				}, {
					title: "Test movie 2",
					director: "Test director",
					description: "Test 2",
					released: "2000"
				}];
				return {
					// Toteuta FirebaseServicen mockatut metodit tähän
					getMovies: function() {
						return movies;
					},

					addMovie: function(movie) {
						movies.push(movie);
					}
				}
		})();

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
			spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
			spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ListMovies', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/
	it('should list all movies from the Firebase', function() {
		expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
		expect(scope.movies.length == 2);
		expect(scope.movies[0].released == "1999");
		expect(scope.movies[1].released == "2000");
	});

	/*
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function() {
		expect(true).toBe(false);
	});
});
