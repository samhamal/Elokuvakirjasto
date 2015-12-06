describe('Show movie', function(){
	var controller, scope;

	var FirebaseServiceMock, RouteParamsMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('Moviedb');

    	FirebaseServiceMock = (function() {
				var movies = [{
					id: "123",
					title: "Fox and the hound",
					director: "Disney tjsp",
					released: "1990",
					description: "Fox and hound go round and round"
				}];
			return {
			  getMovie: function(key, done) {
			    if(key == "123") {
						done(movies[0]);
					} else {
						done(null);
					}
			  };
			}
		})();

		RouteParamsMock = (function(){
			return {
				// Toteuta mockattu $routeParams-muuttuja tähän
				key: '123'
			}
		});

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
			spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();
    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ShowMovie', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock,
	       	$routePrams: RouteParamsMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saatu elokuva löytyy kontrollerista.
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should show current movie from Firebase', function() {
		expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
		expect(scope.movie.title == "Fox and the hound");
	});
});
