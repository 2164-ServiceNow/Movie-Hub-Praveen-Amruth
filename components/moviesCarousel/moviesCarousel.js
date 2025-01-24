angular.module('moviesCarousel', [])
    .filter('capitalize', function () {
        return function (input) {
            if (!input) return input;
            return input.charAt(0).toUpperCase() + input.slice(1);
        };
    })
    .component('moviesCarousel', {
        templateUrl: 'components/moviesCarousel/moviesCarousel.html',
        controller: ['$http', '$timeout', '$rootScope', 'SearchService', 'MovieService', '$location', 'FilterService', 'WishlistService',
            function ($http, $timeout, $rootScope, SearchService, MovieService, $location, FilterService, WishlistService) {
                const vm = this;

                const apiUrls = {
                    animation: 'https://api.sampleapis.com/movies/animation',
                    comedy: 'https://api.sampleapis.com/movies/comedy',
                    horror: 'https://api.sampleapis.com/movies/horror',
                    family: 'https://api.sampleapis.com/movies/family'
                };

                vm.moviesData = {};
                vm.filteredMovies = {};
                vm.selectedFilter = '';
                vm.loading = true;

                vm.fetchMovies = function () {
                    vm.loading = true;
                    const categoryPromises = Object.entries(apiUrls).map(([category, url]) => {
                        return $http.get(url)
                            .then(response => {
                                vm.moviesData[category] = response.data.map(movie => ({
                                    title: movie.title,
                                    posterURL: movie.posterURL,
                                    wishlistActive: false // Initialize wishlistActive property
                                }));
                                vm.filterMovies();
                            })
                            .catch(error => {
                                console.error(`Error fetching ${category} movies:`, error);
                                vm.moviesData[category] = [];
                            });
                    });

                    Promise.all(categoryPromises).finally(() => {
                        vm.loading = false;
                    });
                };

                vm.filterMovies = function () {
                    const query = SearchService.getQuery().toLowerCase();
                    const selectedCategory = vm.selectedFilter.toLowerCase();

                    Object.keys(vm.moviesData).forEach(category => {
                        const searchFiltered = vm.moviesData[category].filter(movie =>
                            movie.title.toLowerCase().includes(query)
                        );

                        vm.filteredMovies[category] =
                            !selectedCategory || selectedCategory === category
                                ? searchFiltered
                                : [];
                    });
                };

                $rootScope.$on('filterUpdated', (event, filter) => {
                    vm.selectedFilter = filter;
                    vm.filterMovies();
                });

                $rootScope.$on('searchQueryUpdated', (event, query) => {
                    vm.filterMovies();
                });

                vm.scrollRight = function (category) {
                    const row = document.querySelector(`.${category}-row`);
                    row.scrollBy({ left: 300, behavior: 'smooth' });
                };

                vm.hasNoMovies = function () {
                    return Object.values(vm.filteredMovies).every(movies => !movies.length);
                };

                vm.showMovieDetails = function (movie) {
                    MovieService.setSelectedMovie(movie); // Store the selected movie in MovieService
                    $location.path('/movies-carousel-moviedetails'); // Navigate to the movie details page
                };

                // Wishlist Functions
                vm.toggleWishlist = function (movie) {
                    movie.wishlistActive = !movie.wishlistActive;
                    if (movie.wishlistActive) {
                        WishlistService.addToWishlist(movie);
                    } else {
                        WishlistService.removeFromWishlist(movie);
                    }

                    WishlistService.logWishlist(); 
                };

                vm.$onInit = function () {
                    vm.fetchMovies();
                };
            }
        ]
    });
