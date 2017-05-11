(function () {

    var app = angular.module('gitHubViewer', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'main.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/main'
            });

    });

}());