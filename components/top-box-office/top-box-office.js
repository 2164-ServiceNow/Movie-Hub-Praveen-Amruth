angular.module('topBoxOffice', ['movieHub'])
.component('topBoxOffice', {
    templateUrl: 'components/top-box-office/top-box-office.html',
    controller: ['$http', '$scope', '$location', 'MovieService', function ($http, $scope, $location, MovieService) {
        const vm = this;
        vm.movies = [];
        vm.filteredMovies = [];
        vm.searchQuery = '';

        // API URL
        const apiUrl = "http://localhost:4002/github_movieslist";

        // Fetch movies from the API
        vm.fetchMovies = function () {
            $http.get(apiUrl).then(response => {
                console.log('API Response:', response.data);

                // Parse and store the movies
                vm.movies = response.data.map(movie => ({
                    title: movie.Title,
                    year: movie.Year,
                    plot: movie.Plot,
                    rating: movie.imdbRating,
                    poster: movie.Images[0],
                    images: movie.Images,
                    genre: movie.Genre,
                    director: movie.Director,
                    actors: movie.Actors,
                    language: movie.Language,
                    awards: movie.Awards
                }));

                // Initially set filteredMovies to all movies
                vm.filteredMovies = vm.movies;
            }).catch(error => {
                console.error('Error fetching movies:', error);
            });
        };

        // Update filteredMovies based on the search query
        vm.updateFilteredMovies = function () {
            if (vm.searchQuery) {
                vm.filteredMovies = vm.movies.filter(movie =>
                    movie.title.toLowerCase().includes(vm.searchQuery.toLowerCase())
                );
            } else {
                vm.filteredMovies = vm.movies; // If no search query, show all movies
            }
        };

        // Navigate to movie details page
        vm.showMovieDetails = function (movie) {
            MovieService.setSelectedMovie(movie); // Use MovieService to store the selected movie
            $location.path('/movie-details'); // Navigate to the details page
        };

        // Listen for search query updates from the SearchService
        vm.$onInit = function () {
            vm.fetchMovies();

            // Listen to the search query updates using $scope.$on
            $scope.$on('searchQueryUpdated', function (event, query) {
                vm.searchQuery = query;
                vm.updateFilteredMovies(); // Update the movie list based on the new search query
            });
        };

        // Clean up the listener when the component is destroyed
        vm.$onDestroy = function () {
            $scope.$off('searchQueryUpdated');
        };
    }]
});
