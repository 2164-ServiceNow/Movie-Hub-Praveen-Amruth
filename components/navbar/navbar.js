angular.module('navbar', ['movieHub'])
    .component('navbar', {
        templateUrl: 'components/navbar/navbar.html',
        controller: ['$scope', 'SearchService', 'FilterService',  '$location', function ($scope, SearchService, FilterService,  $location) {
            const vm = this;

            // Initialize variables
            vm.searchQuery = '';
            vm.selectedFilter = '';
            vm.filterOptions = [
                'Most Popular Movies',
                'Top Box Office Movies',
                'Animation Movies',
                'Comedy Movies',
                'Horror Movies',
                'Family Movies'
            ];

            // Update search query in SearchService
            vm.updateSearchQuery = function () {
                if (vm.searchQuery) {
                    SearchService.setQuery(vm.searchQuery);
                    $scope.$broadcast('searchQueryUpdated', vm.searchQuery); // Notify child components
                }
            };

            // Update selected filter in FilterService
            vm.updateFilter = function () {
                if (vm.selectedFilter) {
                    FilterService.setFilter(vm.selectedFilter);
                    const isMostPopular = vm.selectedFilter === 'Most Popular Movies';
                    $scope.$broadcast('toggleMoviesSection', isMostPopular); // Toggle visibility for movies
                }
            };       
            
            vm.navigateSignInPage = function () {
                $location.path('/sign-in'); 
            };
            
        }]
    });
