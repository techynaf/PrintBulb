angular.
module('PrintBulb').
config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            // Routes only for Main shohozPrint App.
            // Find specific routes on respective core apps.
            
            $routeProvider.
            when('/', {
                templateUrl: 'app/core/home/homeView.html'
            }).
            when('/business-cards', {
                templateUrl: 'app/core/businessCards/businessCardsView.html'
            }).
            when('/posters', {
                templateUrl: 'app/core/posters/postersView.html'
            }).
            when('/design-studio', {
                templateUrl: 'app/core/designStudio/designStudioView.html'
            }).
            when('/admin-panel', {
                templateUrl: 'app/core/adminPanel/adminPanelView.html'
            }).
            otherwise('/');
        }
       ]);