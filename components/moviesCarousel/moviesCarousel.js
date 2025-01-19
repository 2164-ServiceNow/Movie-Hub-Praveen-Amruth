angular.module('moviesCarousel', [])
    .component('moviesCarousel', {
        templateUrl: 'components/moviesCarousel/moviesCarousel.html',
        controller: ['$http', '$timeout', '$rootScope', 'SearchService', function ($http, $timeout, $rootScope, SearchService) {
            const vm = this;

            // API URLs
            const apiUrls = {
                animation: 'https://api.sampleapis.com/movies/animation',
                comedy: 'https://api.sampleapis.com/movies/comedy',
                horror: 'https://api.sampleapis.com/movies/horror',
                family: 'https://api.sampleapis.com/movies/family'
            };

            // Movies data
            vm.moviesData = {
                animation: [],
                comedy: [],
                horror: [],
                family: []
            };

            // Filtered movies based on search query
            vm.filteredMovies = {
                animation: [],
                comedy: [],
                horror: [],
                family: []
            };

            // Fetch movies for a specific category
            vm.fetchMovies = function (category, url) {
                $http.get(url).then(response => {
                    console.log(response.data);
                    vm.moviesData[category] = response.data.map(movie => ({
                        title: movie.title,
                        posterURL: movie.posterURL
                    }));
                    vm.filterMovies(); // Re-filter movies when new data is fetched
                }).catch(error => {
                    console.error(`Error fetching ${category} movies:`, error);
                });
            };

            // Filter movies based on the search query
            vm.filterMovies = function () {
                const query = SearchService.getQuery().toLowerCase();
                
                Object.keys(vm.moviesData).forEach(category => {
                    vm.filteredMovies[category] = vm.moviesData[category].filter(movie =>
                        movie.title.toLowerCase().includes(query)
                    );
                });
            };

            // Initialize data on component load
            vm.$onInit = function () {
                Object.entries(apiUrls).forEach(([category, url]) => {
                    vm.fetchMovies(category, url);
                });

                // Watch for search query changes and filter movies
                $rootScope.$on('searchQueryUpdated', function (event, query) {
                    vm.filterMovies();
                });
            };

            // Scroll movies row horizontally
            vm.scrollRight = function (category) {
                const row = document.querySelector(`.${category}-row`);
                row.scrollBy({ left: 300, behavior: 'smooth' });
            };
        }]
    });
