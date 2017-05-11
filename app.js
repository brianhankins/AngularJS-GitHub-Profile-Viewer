(function () {

    var app = angular.module('gitHubViewer', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'main.html',
                controller: 'MainController'
            })
            .when('/user/:username', {
                templateUrl: 'user.html',
                controller: 'UserController'
            })
            .otherwise({
                redirectTo: '/main'
            });

    });

}());