angular
  .module('topBoxOffice', [])
  .component('topBoxOffice', {
    templateUrl: 'components/top-box-office/top-box-office.html',
    controller: function ($http) {
      const vm = this;

      // API Configuration
      const url2 = 'https://imdb236.p.rapidapi.com/imdb/top-box-office';
      const options2 = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f442929f16msh5daefa9af051ea2p1a12d2jsn4136bdd1be36',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        },
      };

      // Fetch data from API
      vm.$onInit = function () {
        $http(url2, options2)
          .then((response) => {
            console.log('Top Box Office Movies:', response.data);
            vm.movies = response.data;
          })
          .catch((error) => {
            console.error('Error fetching Top Box Office movies:', error);
          });
      };
    },
  });
