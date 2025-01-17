angular.module('movies', [])
.component('movies', {
    templateUrl: 'components/movies/movies.html',
    controller: ['$http', function ($http) {
        const vm = this;
        vm.movies = [];

        const proxyUrl = "https://api.allorigins.win/get?url=";
        const apiUrl = encodeURIComponent("https://www.freetestapi.com/api/v1/movies");

        // Fetching movies using proxy
        vm.fetchMovies = function () {
            $http.get(proxyUrl + apiUrl).then(response => {
                try {
                    // Parse the actual API response
                    const parsedData = JSON.parse(response.data.contents);
                    console.log('Movies Data:', parsedData);
                    vm.movies = parsedData;
                } catch (parseError) {
                    console.error('Error parsing response data:', parseError);
                }
            }).catch(error => {
                console.error('Error fetching movies:', error);
            });
        };

        // Initialize data on component load
        vm.$onInit = function () {
            vm.fetchMovies();
        };
    }]
});
