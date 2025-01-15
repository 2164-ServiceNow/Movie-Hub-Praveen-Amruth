angular.module('navBar',[])

.component('navbar',{
   
})

// # Good
// Names of components much match entirely as lowercase or if you camelCase your component name at definition, then the corresponding html element will only be avaialable if you kebab-case, see below.

// # Good lowercase
// searchBar.js
// ```js
// angular.module('searchBar',[])

//  // components defined like this will remain the same both at definition and in your html element 
//   .component('searchbar',{
// ```

// index.html
// ```html
// <body>
// ...
// <searchbar></searchbar>
// ...
// </body>
// ```

// # Good camelcase
// searchBar.js
// ```js
// angular.module('searchBar',[])

//  	// components named like this will require kebab-case for associated html element
//   .component('searchBar',{
// ```

// index.html
// ```html
// <body>
// ...
// <search-bar></search-bar>
// ...
// </body>
// ```

// # Fails to work regardless
// searchBar.js
// ```js
// angular.module('searchBar',[])

//   // this will fail! do not use kebab-case for component name
//   .component('search-bar',{ 
// ```

// index.html
// ```html
// <body>
// ...
// <!-- will not understand or throw error for associated component-->
// <searchBar></searchBar> 
// ...
// </body>
// ```