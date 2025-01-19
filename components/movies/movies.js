angular.module('movies', [])
    .component('movies', {
        templateUrl: 'components/movies/movies.html',
        controller: ['$http', '$scope', 'SearchService', function ($http, $scope, SearchService) {
            const vm = this;
            vm.movies = [];
            vm.filteredMovies = [];
            vm.searchQuery = '';

            const localImages = [
                'assets/images/moviesimgs/img1.jpg',
                'assets/images/moviesimgs/img2.jpg',
                'assets/images/moviesimgs/img3.jpg',
                'assets/images/moviesimgs/img4.png',
                'assets/images/moviesimgs/img5.jpg',
                'assets/images/moviesimgs/img6.jpg',
                'assets/images/moviesimgs/img7.jpg',
                'assets/images/moviesimgs/img8.jpg',
                'assets/images/moviesimgs/img9.jpg',
                'assets/images/moviesimgs/img10.jpg',
                'assets/images/moviesimgs/img12.jpg',
                'assets/images/moviesimgs/img13.jpg',
                'assets/images/moviesimgs/img14.jpg',
                'assets/images/moviesimgs/img15.jpg',
                'assets/images/moviesimgs/img16.jpg',
                'assets/images/moviesimgs/img17.jpg',
                'assets/images/moviesimgs/img18.jpg',
                'assets/images/moviesimgs/img1.jpg',
                'assets/images/moviesimgs/img19.jpg',
                'assets/images/moviesimgs/img20.jpg'
            ];
            
            const proxyUrl = "https://api.allorigins.win/get?url=";
            const apiUrl = encodeURIComponent("https://www.freetestapi.com/api/v1/movies");

            // Fetch movies
            vm.fetchMovies = function () {
                $http.get(proxyUrl + apiUrl).then(response => {
                    try {
                        const parsedData = JSON.parse(response.data.contents);
                        vm.movies = parsedData.map((movie, index) => ({
                            ...movie,
                            poster: localImages[index % localImages.length],
                        }));
                        vm.filteredMovies = vm.movies; // Initialize filtered movies
                    } catch (parseError) {
                        console.error('Error parsing response:', parseError);
                    }
                }).catch(error => {
                    console.error('Error fetching movies:', error);
                });
            };

            // Filter movies when search query changes
            $scope.$on('searchQueryUpdated', function (event, query) {
                vm.searchQuery = query;
                vm.filteredMovies = vm.movies.filter(movie =>
                    movie.title.toLowerCase().includes(query.toLowerCase())
                );
            });

            // Initialize data on component load
            vm.$onInit = function () {
                vm.fetchMovies();
            };
        }]
    });


