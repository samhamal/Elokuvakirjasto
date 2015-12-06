describe('Add movie', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('Moviedb');

    	FirebaseServiceMock = (function() {
				var movies = [];
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
	      controller = $controller('AddMovies', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function() {
		scope.title = "Mock movie name";
		scope.director = "Di Rector";
		scope.released = "2000";
		scope.description = "lorem ipsum";
		scope.addMovie();
		expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
	});

	/*
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function() {
		scope.title = '';
		scope.director = '';
		scope.released = '';
		scope.description = '';
		scope.addMovie();
		expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();

		scope.title = 'abc';
		scope.director = '';
		scope.released = '';
		scope.description = '';
		scope.addMovie();
		expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();

	});
});
