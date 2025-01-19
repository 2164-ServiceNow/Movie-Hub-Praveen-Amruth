angular.module('navbar', [])
.component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: ['SearchService', function (SearchService) {
        const vm = this;
        vm.searchQuery = '';

        // Update search query in SearchService
        vm.updateSearchQuery = function () {
            SearchService.setQuery(vm.searchQuery);
        };
    }]
});
