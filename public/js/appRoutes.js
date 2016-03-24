angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        // nerds page that will use the NerdController
        .when('/suggestion/:id', {
            templateUrl: 'views/suggestion.html',
            controller: 'SuggestionController'
        })

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}]);
